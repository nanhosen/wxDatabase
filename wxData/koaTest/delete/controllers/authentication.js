const jwt = require('jwt-simple')

// const User = require('../models/user')
const Center = require('../models/centers')
const config = require('../configJWT')

const zonesQuery = require('../queries/zones')
 
const tokenForUser = user => {
	const timestamp = new Date().getTime()
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signin = async (ctx) => {
	const zonesSignIn = await zonesQuery(ctx.request.body.user.ID);
	console.log('zonessignin', zonesSignIn);
	if (!result) {
		throw new Error('couldnt find user ID')
	}
	else {
		ctx.body = { token: tokenForUser(ctx.request.body.user), center_id: ctx.request.body.user.ID, zones: zonesSignIn }
	}

}

exports.signup = async (ctx) => {
	const username = ctx.request.body.username
	const password = ctx.request.body.password
	if (!username || !password) {
		throw new Error('You must provide username and password')
	}
	const findUser = await Center.findOne({ username: username }, (err, existingUser) => {
		if (err) {throw new Error('no idea what the error is')}
		else if (existingUser) {throw new Error('username is in use')}
		else {
			const user = new Center({
				username,
				password
			})
			console.log(user)
			// user.save (err) => {
			// 	if (err) {throw new Error ('another error of some sort')}
			// 	else {
			// 		ctx.body = { token: tokenForUser(user), username: user.username }
			// 	}
			// }
		}	

	})


}

