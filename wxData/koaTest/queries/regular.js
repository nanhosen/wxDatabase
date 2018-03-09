const ZoneInfo = require('../models/zoneinfo')
const ercArray = require('./raws')
// const dateArray = require('./obsDate')

// console.log('dateArray (from regular.js)' + dateArray[0].get("103207"))
// const obsDate = dateArray[0].get("103207");

// const regularQuery = ZoneInfo
// 	.find({ cured: true })
// 	.where('manual').equals('not set')
// 	.select('zone rawsObject ERC_threshold')

// var dog = { '101812': { RAWSname: 'Horton Peak', selected: false },
//   '102903': { RAWSname: 'North Fork', selected: true },
//   '102906': { RAWSname: 'Ohio Gulch', selected: true } }
// var cat = { '102601': { RAWSname: 'Boise South', selected: false },
//   '102709': { RAWSname: 'Mountain Home', selected: true } } 

const regularQuery = ZoneInfo
	.find({
		cured: true,
		$or: [ 
			{ manual_expires: { $lt: Date.now() } },
			{ manual: { $eq: 'not set' } },
		],
		ERC_threshold: { $exists: true, $gt: 0 }
	})
	.select({
		zone: 1,
		elevation: 1,
		ERC_threshold: 1,
		manual: 1,
		manual_expires: 1,
		rawsObject: 1,
		center_id: 1,
		cured: 1,
	})
	.limit()
	.lean()

const buildMap = o => Object.keys(o).reduce((prev, curr) => {
	if (!o[curr].selected)
		return prev
	prev.set(curr, o[curr].RAWSname)
	return prev
}, new Map())
function regularArray() {
	return regularQuery
		.then(results => {
			results.forEach(zone => {
				const selected = Array.from(buildMap(zone.rawsObject).keys()) // array of selected RAWS
				let days = 3

				const periodicAverages = ercArray.map(x => {

					let n = selected.length
					var result = selected.reduce((prev, curr) => {
						const a = x.get(curr) ? parseInt(x.get(curr)) : (n -= 1, 0) 
						// if missing a station reading:
						// first decrement the n-counter to account for that missing station reading
						// for that particular time period so that the average zone ERC calculation remains meaningful, 
						// then coerce the absent raws station ERC reading to equal zero for calculation purposes
					 // if(zone.zone ==='ID423'){
					 // 	console.log('a ' + a)
					 // }

						return prev += a
					}, null) 

					if (!(result > 0)) days -= 1 
					return n === 0 ? 0 : (result / n)
					// if(zone.zone ==='ID423'){
					// 	console.log(n)
					//  }					
					// if(result==0){
					// 	days -=1
					// 	// console.log('result ' + (result/n) )
					// 	return result
					// }
					// else{
					// return (result / n) 
					// }
					// return (result / n) 
				})
				if(zone.zone ==='ID423'){
					 	console.log(' periodic avgs[1]' + periodicAverages[1] + ' days: ' + days)
					 }

				zone.ERC = Math.round(periodicAverages[0])
				zone.ERC24 = Math.round(periodicAverages[1])
				zone.ERC48 = Math.round(periodicAverages[2])

				const ThreeDayAverage = (days > 0) 
					? periodicAverages.reduce((prev, curr) => {
						// if(zone.zone ==='ID423'){console.log(' prev: ' + prev + '  curr: ' + curr + '  added: ' + (prev+curr) + ' days: ' + days)}
						return prev + curr
					}, null) / days
				 	: null
				zone.ThreeDayAverage = Math.round(ThreeDayAverage);
				if(zone.zone ==='ID423'){
					 	console.log(' ThreeDayAverage ' + zone.ThreeDayAverage)
					 }

				
				const thresholdDiff = parseInt(ThreeDayAverage) - parseInt(zone.ERC_threshold) 
				zone.thresholdDiff = thresholdDiff
				const status = function(thresholdDiff) {
					switch(true) {
						case (thresholdDiff <= -11):
							return 'notcritical'
						case (-11 < thresholdDiff && thresholdDiff < 0):
							return 'approachingcritical'
						case (0 <= thresholdDiff):
							return 'critical'
						default:
							return 'nodata'
					}
				}(thresholdDiff)
		    zone.status = status
		    // if (zone.zone === 'UT478')
		    // 	console.log("regjsdata", zone)
			// console.log('Zone ' + zone.zone + ' Date: ' + zone.obsDate + ' Three Day Avg: ' + zone.ThreeDayAverage + ' Threshold: ' + zone.ERC_threshold + ' Threshold Diff: ' + zone.thresholdDiff + ' Status: ' + zone.status + ' Zero: ' + zone.ERC + ' Twenty Four: ' + zone.ERC24 + ' Forty Eight: ' + zone.ERC48 + '\n')

		  	// zone.manual = zone.manual_expires ? `manual ${zone.manual} has expired` : 'not set' 
		  	// zone.manual_expired = zone.manual_expires ? zone.manual_expires : null

				const discard = [
					'manual',
					'manual_expires',
					// 'manual_expired',
				]
				// !(zone.manual === 'not set') || discard.map(curr => delete zone[curr])
				// zone.manual_expired  && delete zone.manual_expires
				discard.map(curr => delete zone[curr])
			})
			return results
		})
		.then(res => {
			return res
		})
		.catch(err => console.log(err))
}

module.exports = regularArray