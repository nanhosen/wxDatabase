const ZoneInfo = require('../models/zoneinfo')
const Status = require('../models/status')
const UpdateStatus = require('../queries/status')

const genErcData = require('../cron/genErcData')

exports.updateZone = async (ctx) => {
	const { 
		zone,
		center_id, 
		raws,
		cured,
		elevation,
		ERC_threshold,
		manual,
		manual_expires,
		justification,
		email,
		remarks,
	} = ctx.request.body

	const new_manual_expires = (manual && manual !== 'not set') ? (Date.now() + 3*86400000) : null
	const old_manual_expires = !manual_expires ? null : (Date.parse(manual_expires) > Date.now() && manual !== 'not set' ? manual_expires : null)

	const newStatus = new Status({
    zone,
    center_id,
 		elevation,
    remarks,
		cured,
    ERC_threshold,
    manual: !manual ? 'not set' : manual,
    manual_expires: new_manual_expires ? new_manual_expires : old_manual_expires,
    justification,
    rawsObject: raws,
	})

	newStatus.save(err => {
		if (err) throw err
		console.log('new status entry created')
	})
	.catch(err => console.log(err))

	ZoneInfo.findOneAndUpdate({ zone: { $eq: zone } }, 
		{ 
			rawsObject: raws,
			cured,
			elevation,
			ERC_threshold,
			manual: !manual ? 'not set' : manual,
			manual_expires: new_manual_expires ? new_manual_expires : old_manual_expires,
			updated: Date.now(),
		},
		{
			// new: true,
		},
		function(err, zone) {
			if (err) {
				console.log("error in updateZone", err)
				throw new Error('error in updateZone')
			}
			else {
				async function respond() {
					try {
						const [ isCritical, status ] = await Promise.all([
							genErcData(),
							new UpdateStatus.statusArray(),
						])						
						ctx.body = { "message": "update successful", isCritical, status }
													console.log('hi')

					}
					catch (error) {
						console.log(error)
					}
				}
				respond()
			}
		}
	)

}