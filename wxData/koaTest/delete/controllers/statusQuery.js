const Status = require('../queries/status')

exports.statusQuery = async (ctx) => {
	const statusResult = await Status.statusQuery;
	if (!statusResult) {
		throw new Error('There was an error retrieving the status.')
	} else {
	ctx.body = statusResult
	}
	//original code had a bunch of extra stuff on res.set, like headers and lastModified
}



// const Status = require('../models/status')

// const getStatus = Status.find({
// 		updated:  { $gt: (Date.now() - 365*86400000) } 
// 	})
// 	.select({
// 		_id: 0,
//     updated: 1,
//     zone: 1,
//     center_id: 1,
//  		elevation: 1,
// 		cured: 1,
//     ERC_threshold: 1,
//     manual: 1,
//     manual_expires: 1,
//     justification: 1,
//     remarks: 1,
// 	})
// 	.sort({ 'updated': -1 })

// exports.statusQuery = getStatus

// exports.statusArray = function() {
// 	return getStatus.then(results => results).catch(err => console.log(err))
// }




	// app.get('/status', function(req, res) {
	// 	// const statusQuery = Status
	// 	// 	.find({
	// 	// 		updated:  { $gt: (Date.now() - 365*86400000) } 
	// 	// 	})
	// 	// 	.sort({ 'updated': -1 })

	// 	Status.statusQuery.then(response => {
	// 		res.set({
	// 	    lastModified: true,
	// 	    headers: {
	//         'x-timestamp': Date.now(),
	//         'x-sent': true,
	// 	    }
	//   	})
	// 		res.send(response)
	// 	})		
	// })
