const mongoose = require('mongoose')
const Schema = mongoose.Schema


const stnDataSchema = new Schema(
	{ 
		station: { type: String, default: null }, 
		elevation: { type: String, default: null },
		timeZone: { type: String, default: null },
		dates: {},
		data: {}
	}, 
	{ collection: 'stndata' },
	{ runSettersOnQuery: true }
)

stnDataSchema.pre('save', function(next) { 
 	const stndata = this // get access to the zoneinfo model
 	next()
})

// zoneinfoSchema.methods.comparePassword = function(candidatePassword, callback) {

// }

const StnData = mongoose.model('stndata', stnDataSchema)

module.exports = StnData



