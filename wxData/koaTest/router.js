const koa = require('koa')
const convert = require('koa-convert')
const bodyParser = require('koa-bodyparser')
const router = require('koa-simple-router')
const error = require('koa-json-error')
const logger = require('koa-logger')
const koaRes = require('koa-res')
const handleError = require('koa-handle-error')
const UpdateZone = require('./controllers/updateZone')
const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')
// create middleware/route-interceptor of sorts
const requireAuth = passport.authenticate('jwt', { session: false }) // session: false means 'no cookies'
const requireSignin = passport.authenticate('local', { session: false }) // route middleware

const ercDataArchive = require('./archive/ercDataArchive')
const genErcData = require('./cron/genErcData')

// const zonesQuery = require('./queries/zones')
// const Status = require('./models/status')
const Status = require('./queries/status')
const app = new koa()

app.use(async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		ctx.status = err.status || 500
		ctx.body = err.message
		ctx.app.emit('error', err, ctx)
	}
})

app.use(logger())

app.use(bodyParser())

app.use(router(_ => {
	_.get('/saysomething', async (ctx) => {
		ctx.body = 'hellow world'
	}),
	_.get('/throwerror', async (ctx) => {
		throw new Error('Error!!')
	}),
	_.get('/data', async (ctx) => {
		const options = {
	    root: __dirname + '/',
	    // dotfiles: 'deny',
	    lastModified: true,
	    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true,
	    }
	  }
	  const dataSend = await sendFile(ctx, './archive/ercDataArchive.json')	  
	})
}))
// app.use(async (ctx, next) => {
//   const stats = await sendfile(ctx, '/Users/jong/.bash_profile')
//   if (!ctx.status) ctx.throw(404)
// })
// module.exports = app => {
// 	// app.locals.ercDataArchive = ercDataArchive
// 	app.get('/data', async (ctx) => {
// 		const options = {
// 	    root: __dirname + '/',
// 	    // dotfiles: 'deny',
// 	    lastModified: true,
// 	    headers: {
//         'x-timestamp': Date.now(),
//         'x-sent': true,
// 	    }
// 	  }
// 	  const dataSend = await sendFile(ctx, './archive/ercDataArchive.json')	  
// 		// async function respond() {
// 		// 	try {
// 		// 		const jsonData = await genErcData()
// 		// 		// console.log("az105", jsonData["AZ105"])
// 		// 		res.send({ jsonData })
// 		// 	}
// 		// 	catch (error) {
// 		// 		console.log(error)
// 		// 	}
// 		// }
// 		// respond()		
// 		// res.send(ercDataArchive)
// 	})
// 	// app.get('/', requireAuth, function(req, res) {
// 	// 	res.send({ "message": "this is a secret code" })
// 	// 	// res.send(app.locals.ercDataArchive)
// 	// })
// 	// // use route middleware requireSignin before proceeding to route
// 	// app.post('/signin', requireSignin, Authentication.signin, function(req, res) {
// 	// 	// res.send(zonesQuery(req.user.ID).then(response => response).catch(err => console.log(err)))
// 	// }) 
// 	// app.post('/signup', Authentication.signup)
// 	// app.post('/client', requireAuth, function(req, res) {
// 	// 	res.send({ "message": "this is a secret widget code" })
// 	// })
// 	// app.post('/update', requireAuth, 
// 	// 	UpdateZone.updateZone
// 	// // 	function(req, res) {
// 	// // 		genErcData()
// 	// // 		res.send({ "message": "update successful" })		
// 	// // 	}
// 	// )
// 	// app.get('/status', function(req, res) {
// 	// 	// const statusQuery = Status
// 	// 	// 	.find({
// 	// 	// 		updated:  { $gt: (Date.now() - 365*86400000) } 
// 	// 	// 	})
// 	// 	// 	.sort({ 'updated': -1 })

// 	// 	Status.statusQuery.then(response => {
// 	// 		res.set({
// 	// 	    lastModified: true,
// 	// 	    headers: {
// 	//         'x-timestamp': Date.now(),
// 	//         'x-sent': true,
// 	// 	    }
// 	//   	})
// 	// 		res.send(response)
// 	// 	})		
// 	// })

// }