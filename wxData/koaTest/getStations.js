///this is the version that works saving info to file system. next step is to make it save to mongodb
const axios = require("axios");
const mongoose = require('mongoose')
const fixMissing = require('./fixMissing.js')
const makeObject = require('./makeObject.js')
const fs = require('fs')
const config = require('./config')
const StnData = require('./models/stnData')
const urlMeso = "https://api.synopticdata.com//v2/stations/metadata?gacc=gbcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8";
const mongoKey = "XJGyTcrWEYUrzsEcUnxqany6FK7XsECM";

// var configValues = require('./config');
// {
//   "uname": "nanhosen",
//   "pwd": "pray4sno"
// }
// module.exports = {
//   getDbConnectionString: function() {
//     return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds213338.mlab.com:13338/wxdata';
//   }
// }
// mongoose.connect('mongodb://username:password@host:port/database?options...');

// mongoose.connect(config.getDbConnectionString(), err => { 
//   if (err) throw err

// })

mongoose.connect('mongodb://nanhosen:pray4sno@ds213338.mlab.com:13338/wxdata', err => { 
  if (err) throw err

})


// const MongoClient = require('mongodb').MongoClient;
// const test = require('assert');
// // Connection url
// const url = 'mongodb://nanhosen:pray4sno@ds213338.mlab.com:13338/wxdata';
// // Database Name
// const dbName = 'wxdata';

// // Connect using MongoClient
// const mongoClient = new MongoClient(url);
// mongoClient.connect(function(err, client) {
//   const db = client.db(dbName);
//   client.close();
// });




getStations(urlMeso)
  // .then(e => console.log(e))
  .then((g)=>{requestStationData(g)})
  // .then((h)=>{console.log(h)}) 


async function getStations(urlMeso) {
    const resp = await axios.get(urlMeso);
    const data = resp.data;
    // console.log(data)
    const dataArray = filterStations(data);
    return dataArray
}


// async function grabDoc(query,dbData){
//   const dat = dbData;
//   StnData.find(query,(err,dat)=>{
//     if(err) console.log(err)
//       else{
//         // console.log('dbdata',dbData)
//         const dbDates = dbData[0].dates;
//         const dbMaxT = dbData[0].data.maxT;
//         console.log('dbMaxT', dbMaxT)
//         const maxTInsert = dbMaxT.concat(newMaxT);
//         console.log('bigMax', maxTInsert.length, 'origMax', dbMaxT.length)
//         // console.log('dbdates', dbDates)
//         const dbDatesLen = dbDates.length;
//         const lastDbDate = dbDates[dbDatesLen-1];
//         if(lastDbDate == latestDate){
//           console.log('nothing new')
//         }
//         else{
//           console.log('theres a diff' + latestDate + lastDbDate)
//         }
//         // const dateDiff = latestDate - lastDbDate;
//         // console.log('wxdata', wxData)
//         // console.log('dateDiff', dateDiff)
//         // if (dateDiff == 0){
//         //   console.log('no new Data')
//         // }
//         // else{
//         //   console.log('newData')
//         // }
//         return maxTInsert
//       }
//     }
//   })
// }

async function createObject(data){
  const resp = await fixMissing(data)
  const finalObj = await makeObject(resp)
  console.log('finalObj', finalObj)
  const station = finalObj.station;
  const elevation = finalObj.elevation;
  const timeZone = finalObj.timeZone;
  const dates = finalObj.dates;
  const wxData = finalObj.data;
  const wxDataObj = finalObj.data[0];
  // console.log('wxData', wxData)
  console.log('wxDataObj', wxDataObj)
  const newMaxT = wxData.maxT;
  const newMinT = wxData.minT;
  const newAftT = wxData.aftT;
  const newMaxTd = wxData.maxTd;
  const newMinTd = wxData.minTd;
  const newAftTd = wxData.aftTd;
  const newMaxRh = wxData.maxRh;
  const newMinRh = wxData.minRh;
  const newAftRh = wxData.aftRh;
  const dateLength = dates.length;
  const latestDate = dates[dateLength-1];
  const query = { station: station };
  

  // StnData.find(query,(err,dbData)=>{
  //   if(err) console.log(err)
  //   else{
  //     // console.log('dbdata',dbData)
  //     console.log('lencheck');
  //     const dbDates = dbData[0].dates;
  //     console.log('dbDates');
  //     const dbDatesLen = dbDates.length;
  //     console.log('dbDatesLen');
  //     const datesInsert = dbDates.concat(dates);
  //     console.log('datesInsert');
  //     const lastDbDate = dbDates[dbDatesLen-1];
  //     console.log('lastDbDate');
  //     const dbMaxT = dbData[0].data.maxT;
  //     console.log('dbMaxT',dbMaxT.length);
  //     const maxTInsert = dbMaxT.concat(newMaxT);
  //     console.log('maxTInsert',maxTInsert.length);
  //     const dbMinT = dbData[0].data.minT;
  //     const minTInsert = dbMinT.concat(newMinT);
  //     const dbAftT = dbData[0].data.aftT;
  //     const aftTInsert = dbAftT.concat(newAftT);
  //     const dbMaxTd = dbData[0].data.maxTd;
  //     const maxTdInsert = dbMaxTd.concat(newMaxTd);
  //     const dbMinTd = dbData[0].data.minTd;
  //     const minTdInsert = dbMinTd.concat(newMinTd);
  //     const dbAftTd = dbData[0].data.aftTd;
  //     const aftTdInsert = dbAftTd.concat(newAftTd);
  //     // console.log('lencheck',dbAftTd.length,'new', aftTdInsert.length)
  //     const dbMaxRh = dbData[0].data.maxRh;
  //     const maxRhInsert = dbMaxRh.concat(newMaxRh);
  //     const dbMinRh = dbData[0].data.minRh;
  //     const minRhInsert = dbMinRh.concat(newMinRh);
  //     const dbAftRh = dbData[0].data.aftRh;
  //     const aftRhInsert = dbAftRh.concat(newAftRh);
  //     const newWxData = {
  //       "maxT" : maxTInsert,
  //       "minT" : minTInsert,
  //       "aftT" : aftTInsert,
  //       "maxTd" : maxTdInsert,
  //       "minTd" : minTdInsert,
  //       "aftTd" : minTdInsert,
  //       "maxRh" : maxRhInsert,
  //       "minRh" : minRhInsert,
  //       "aftRh" : aftRhInsert
  //     }
  //     const newInsert = { 
  //     station,
  //     elevation,
  //     timeZone,
  //     dates: datesInsert,
  //     data: newWxData,
  //   };
  //     if(lastDbDate == latestDate){
  //       console.log('nothing new')
  //     }
  //     else{
  //       console.log('theres a diff' + latestDate + lastDbDate)
  //     }
  //     // const dateDiff = latestDate - lastDbDate;
  //     // console.log('wxdata', wxData)
  //     // console.log('dateDiff', dateDiff)
  //     // if (dateDiff == 0){
  //     //   console.log('no new Data')
  //     // }
  //     // else{
  //     //   console.log('newData')
  //     // }
  //     return newInsert
  //   }
  // })
  // .then((doc)=>{
  //   // console.log('doc', doc)
  //   const station1 = doc[0].station;
  //   console.log(station1,'stn1')
  //   const elevation1 = doc[0].elevation;
  //   const timeZone1 = doc[0].timeZone;
  //   const dates1 = doc[0].dates;
  //   const data1 = doc[0].data;
  //   const newDbInsert= { 
  //     station1,
  //     elevation1,
  //     timeZone1,
  //     dates: dates1,
  //     data: data1,
  //   };
  //   console.log(newDbInsert,'insert')
  //   const newDbDoc = new StnData(newDbInsert);
  //   newDbDoc.save(err => {
  //     if (err) throw err
  //     console.log('entry created')
  //   })
  // })


  // const mongoObj = new StnData({
  //   station,
  //   elevation,
  //   timeZone,
  //   dates: dates,
  //   data: wxData,
  // })

  // mongoObj.save(err => {
  //   if (err) throw err
  //     console.log('entry created')
  // })
  // .catch(err => console.log(err))
  // console.log('insert out of function', maxTInserts)
  // console.log('newMaxt', newMaxT)
  const testMaxT = ['a','b','c','d','e'];
  const newData = { 
      station,
      elevation,
      timeZone,
      dates: dates,
      data: wxData,
  };
  const datesTest = ['a','b','c','d','e'];
  const newMaxTtest = ['a','b','c','d','e'];
  const newMinTtest = ['a','b','c','d','e'];
  const newAftTtest = ['a','b','c','d','e'];
  const update = {
    $set: {'station': station, 'elevation': elevation, 'timeZone': timeZone},
    $push: {
      'dates': dates,
      'data.maxT': newMaxT, 
      'data.minT': newMinT, 
      'data.aftT': newAftT,
      'data.maxTd': newMaxTd, 
      'data.minTd': newMinTd, 
      'data.aftTd': newAftTd,
      'data.maxRh': newMaxRh, 
      'data.minRh': newMinRh, 
      'data.aftRh': newAftRh
    }
   };
    // $push: {'dates': dates, 'data': wxData}};

  StnData.findOneAndUpdate( query, update, {upsert: true} ,
    function(err, doc) {
      if (err) {
        console.log("error in updateStation", err)
        throw new Error('error in updateStation')
      }
      else {
        console.log('saved')
        // async function respond() {
        //   try {
        //     const [ isCritical, status ] = await Promise.all([
        //       genErcData(),
        //       new UpdateStatus.statusArray(),
        //     ])            
        //     ctx.body = { "message": "update successful", isCritical, status }
        //                   console.log('hi')

        //   }
        //   catch (error) {
        //     console.log(error)
        //   }
        // }
        // respond()
        // console.log('hi', newData)
      }
    }
  )



  // console.log('stn',stn)
  // fs.writeFile(`./stnData/`+stn+`wxData.json`, JSON.stringify(finalObj), err => {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log("file saved for " + stn)
  // })
  // return finalObj
}
// async function makeObject(data){
//   const fullData = await axios.get()
// }

// async function writeObject(data){
//   const newObj = await createObject(data)
//   fs.writeFile(`./stnData/`+stn+`wxData.json`, JSON.stringify(newObj), err => {
//         if (err) {
//           return console.log(err)
//         }
//         console.log("file saved for " + stn)
//       })
// }

function requestStationData(g){
  const stnArray = g;
  const arrayLen = stnArray.length;
  const axiosArray = [];
  // console.log(JSON.stringify(stnArray))
  console.log('in requestStationData')
  stnArray.map((curr,i)=>{
    const stn = curr;
    const reqUrl = "https://api.synopticlabs.org/v2/stations/timeseries?&token=ea0ea69fd87b4eac81bfc08cb270b8e8&start=200701010000&end=200710312359&obtimezone=utc&output=json&stid=" + stn;
    if(i>0 && i<5){
      const axiosReq = axios.get(reqUrl);
      axiosArray.push(axiosReq)
    }
  })

  Promise.all(axiosArray)
  .then((values)=>{
    values.map((curr,i)=>{
      const data = curr.data;
      // console.log('data', data)
      if (data.SUMMARY.NUMBER_OF_OBJECTS>0){
        const stn = data.STATION[0].STID;
      // console.log(i,stn)
      // const cal = fixMissing(data)
      const newObj = createObject(data)

      }
      else{
        console.log('no stnData',i)
      }
      
      // const write = writeObject(newObj)
      
    })
   })
}
    



function filterStations(data){
  var millisecondYear=31536952000;
  var stnArray = [];
  var wierdPor = [];
  var variableArray = [];
  data.STATION.map((curr, i) => {
    var mNetId = curr.MNET_ID;
    var porStart = curr.PERIOD_OF_RECORD.start;
    var porStartDate = new Date(porStart);
    var porStartUnix = porStartDate.setUTCHours(18,0,0,0);
    var porEnd = curr.PERIOD_OF_RECORD.end;
    var porEndDate = new Date(porEnd);
    var porEndUnix = porEndDate.setUTCHours(18,0,0,0);
    var stnId = curr.STID;
    var status = curr.STATUS;
    var sensorVariables = curr.SENSOR_VARIABLES;
    var por = (porEndUnix - porStartUnix)/millisecondYear;
    if((por >= 5) && (status == "ACTIVE")){
      // var sensorVariablesArray = Object.keys(sensorVariables)
      // var isAirTemp = sensorVariablesArray.includes('air_temp');
      // var isPrecip = sensorVariablesArray.includes('precip_accum_one_hour');
      // var isDewPt = sensorVariablesArray.includes('dew_point_temperature');
      // var isWindSpeed = sensorVariablesArray.includes('wind_speed');
      // var isWindGust = sensorVariablesArray.includes('wind_gust');
      // var isRH = sensorVariablesArray.includes('relative_humidity');
      // var stnVariables = [stnId,sensorVariablesArray];
       // variableArray.push(stnVariables)
       stnArray.push(stnId);
    }
  },[])
  return stnArray
  // var variableArrayMap = new Map(variableArray)
  // console.log(JSON.stringify(stnArray))dataArray
}