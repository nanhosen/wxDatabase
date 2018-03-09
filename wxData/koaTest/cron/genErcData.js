const fs = require('fs')
const regularArray = require('../queries/regular')
const manualArray = require('../queries/manual')
const uncuredArray = require('../queries/uncured')
const obsDate = require('../queries/obsDate')

// console.log('obsdate in genErcData' + obsDate)

const d = new Date()
const name = `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}${d.getHours() + 1}`
// const file = fs.createWriteStream(`./archive/${name}.json`, {flags: 'w'})
// const file = fs.createWriteStream(`./archive/ercDataArchive.json`, {flags: 'w'})
// const getData = Promise.all([ regularArray ]).then(res => console.log(res))

async function genErcData() {
	try {
		const [ regular, manual, uncured ] = await Promise.all([
			new regularArray(),
			new manualArray(),
			new uncuredArray(),
		])
		
		const zones = [...regular, ...manual, ...uncured] 
		// const zones = regular.concat(manual).concat(uncured)
		const data = zones.reduce((prev, curr) => {
			prev[curr.zone] = {
				obsdate: obsDate,
				elevation: curr.elevation || null,
				ERC: (!curr.ERC || curr.ERC.toFixed(2)) || curr.ERC,
				ERC24: (!curr.ERC24 || curr.ERC24.toFixed(2)) || curr.ERC24,
				ERC48: (!curr.ERC48 || curr.ERC48.toFixed(2)) || curr.ERC48,
				ThreeDayAverage: (!curr.ThreeDayAverage || curr.ThreeDayAverage.toFixed(2)) || curr.ThreeDayAverage,
				ERC_threshold: curr.ERC_threshold,
				thresholdDiff: curr.thresholdDiff,
				status: curr.status,
				calc_erc_status: curr.calc_erc_status,
				// manual: curr.manual,
				manual_expires: curr.manual_expires || null,
				// manual_expired: curr.manual_expired,
				center_id: curr.center_id,
				cured: curr.cured,
				raws: curr.rawsObject,
			}
			return prev
		}, {})
		// file.writeFile(JSON.stringify(data))
		// console.log(JSON.stringify(data))
		fs.writeFile(`./archive/ercDataArchive.json`, JSON.stringify(data), err => {
			if (err) {
				return console.log(err)
			}
			console.log("file saved")
		})
		return data
	}
	catch (err) {
		console.log(err)
	}
}	

module.exports = genErcData