const axios = require("axios");
const mongoose = require('mongoose')
const fixMissing = require('./fixMissing.js')
const makeObject = require('./makeObject.js')
const makeRequestDate = require('./makeRequestDateClean.js')
const fs = require('fs')
const config = require('./config')
const StnData = require('./models/stnData')
const urlMeso = "https://api.synopticdata.com//v2/stations/metadata?gacc=gbcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8";
const mongoKey = "XJGyTcrWEYUrzsEcUnxqany6FK7XsECM";



mongoose.connect('mongodb://nanhosen:pray4sno@ds213338.mlab.com:13338/wxdata', err => { 
  if (err) throw err

})



getStations(urlMeso)
  .then((g)=>{requestStationData(g)})


async function getStations(urlMeso) {
    const resp = await axios.get(urlMeso);
    const data = resp.data;
    const dataArray = filterStations(data);
    return dataArray
}




async function createObject(data){
  const resp = await fixMissing(data)
  const finalObj = await makeObject(resp)
  const station = finalObj.station;
  const elevation = finalObj.elevation;
  const timeZone = finalObj.timeZone;
  const dates = finalObj.dates;
  const wxData = finalObj.data;
  const wxDataObj = finalObj.data[0];
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
  

  // const datesTest =   ["2007-10-28","2007-10-29","2007-10-30","2007-10-31"];
  // const newMaxTtest = ['f','g','h','i','j'];
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

  StnData.findOneAndUpdate( query, update, {upsert: true} ,
    function(err, doc) {
      if (err) {
        console.log("error in updateStation", err)
        throw new Error('error in updateStation')
      }
      else {
        console.log('saved')
        
      }
    }
  )



}



async function requestStationData(g){
  const stnArray = g;
  const arrayLen = stnArray.length;
  const axiosArray = [];
  console.log('in requestStationData')
  const reqArray = await Promise.all(stnArray.map(async curr => {
    const wxStn = curr;
    const query = { station: wxStn };
    const dateEnd = await StnData.find(query,(err,dbData)=>{
      if(err) console.log(err)
    })
    if(dateEnd.length>0){
      const dbDates = dateEnd[0].dates;
      const dbDatesLen = dbDates.length;
      const lastDbDate = dbDates[dbDatesLen-1];
      const lastDbDateNoSpace = lastDbDate.replace(/-/g,"")
      console.log('lastdate from getDate',lastDbDateNoSpace)
      const makeDate = makeRequestDate(lastDbDateNoSpace,wxStn);
      return makeDate
    }
    else{
      const fistDate = "2006-12-31";
      const firstDateNoSpace = fistDate.replace(/-/g,"")
      const makeDate = makeRequestDate(firstDateNoSpace,wxStn);
      return makeDate
        }
  }))
  reqArray.map((curr,i)=>{
    const stn = curr;
    const reqUrl = curr;
      const axiosReq = axios.get(reqUrl);
      axiosArray.push(axiosReq)
  })

  Promise.all(axiosArray)
  .then((values)=>{
    values.map((curr,i)=>{
      const data = curr.data;
      if (data.SUMMARY.NUMBER_OF_OBJECTS>0){
        const stn = data.STATION[0].STID;
      const newObj = createObject(data)

      }
      else{
        console.log('no stnData',i)
      }
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

       stnArray.push(stnId);
    }
  },[])
  return stnArray
}