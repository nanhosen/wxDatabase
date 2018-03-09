const textract = require('textract');
// const fs = require('fs');
// function rating(callback) {
// 	return textract.fromUrl(url, function( error, text ) {
// 		const textArray = text.split(" ");
// 		const pos = textArray.indexOf("Plateau");
// 		const plateau = textArray[pos];
// 		const ratingPosition = (pos + 5);
// 		const adjRating =  textArray[ratingPosition];
// 		console.log('adjrating: ' + JSON.stringify(adjRating))
// 		return callback(JSON.stringify(adjRating));

// 		// fs.writeFile(`./archive/rating.json`, JSON.stringify(adjRating), err => {
// 		// 	if (err) {
// 		// 		return console.log(err)
// 		// 	}
// 		// 	console.log("file saved")
// 		// })
// 	})
// };

// module.exports = rating;
module.exports = textract.fromUrl('https://gacc.nifc.gov/gbcc/dispatch/ut-cdc/cdcmain.html', function( error, text ) {
		const textArray = text.split(" ");
		const pos = textArray.indexOf("Plateau");
		const plateau = textArray[pos];
		const ratingPosition = (pos + 5);
		const adjRating =  textArray[ratingPosition];
		console.log('adjrating: ' + JSON.stringify(adjRating))
		return callback(JSON.stringify(adjRating));

		// fs.writeFile(`./archive/rating.json`, JSON.stringify(adjRating), err => {
		// 	if (err) {
		// 		return console.log(err)
		// 	}
		// 	console.log("file saved")
		// })
	})
}