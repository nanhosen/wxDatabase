const http = require('http')
const https = require('https')
const url = require('url')
const path = require('path')
const fs = require('fs')
const port = process.env.PORT || 3070

// main starting point for our application
const compression = require('compression')
// const express = require('express')
var Koa = require('koa');
var Router = require('koa-router');
var serve = require('koa2-static-middleware');
const bodyParser = require('body-parser')
const morgan = require('morgan') // logging framework to log incoming http requests to our app


// app.use(compression())
//const router = require('./router')
const mongoose = require('mongoose').set('debug', false)
const cors = require('cors')
const config = require('./config')
// const Center = require('./models/centers')
const StnData = require('./models/stnData')
// const Status = require('./queries/status')

// cron
// const rawsData = require('./cron/rawsData')
// const genErcData = require('./cron/genErcData')
// const CronJob = require('cron').CronJob
// const xmlJob = new CronJob({cronTime: '* 42 0-23 * * 0-6', onTick: rawsData, start: false, timeZone: 'America/Boise'}) 
// const ercJob = new CronJob({cronTime: '* 43 * 8,24 * * 0-6', onTick: genErcData, start: false, timeZone: 'America/Boise'})
// xmlJob.start()
// ercJob.start()
// rawsData()
// genErcData()



mongoose.connect(config.getDbConnectionString(), err => {	
	if (err) throw err

})

// App Setup
// const UpdateZone = require('./controllers/updateZone')
// const StatusQuery = require('./controllers/statusQuery')
// const Authentication = require('./controllers/authentication')
// const passportService = require('./services/passport')
// const passport = require('passport')
// const json = require('koa-json')

// create middleware/route-interceptor of sorts
// const requireAuth = passport.authenticate('jwt', { session: false }) // session: false means 'no cookies'
// const requireSignin = passport.authenticate('local', { session: false }) // route middleware

const ercDataArchive = require('./archive/ercDataArchive')



const app = new Koa();
var router = new Router();


router.get('/data', serve('./archive', { index: 'ercDataArchive.json' }));

router.get('/',requireAuth, async (ctx) => {
	ctx.body({"message": "this is a secret code"})
})
router.post('/signin', requireSignin, Authentication.signin)
// router.post('/signin', requireSignin, Authentication.signin)
// router.post('/signup', Authentication.signup)
// router.post('/client', requireAuth)
// router.post('/update', requireAuth, UpdateZone.updateZone)

router.get('/status', StatusQuery.statusQuery)






	
app
	.use(json())
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3070);


// app.use(morgan('combined'))
// app.use(cors())
// app.use(bodyParser.json({ type: '*/*' })) // force any incoming request to be parsed as json
// app.use(router.routes())
// app.use(router.allowedMethods());
// //router(app)

// // Server setup
// // const server = https.createServer(options, app) 
// const server = http.createServer(app)
// server.listen(port)
// console.log('Server listening on: ', port)
