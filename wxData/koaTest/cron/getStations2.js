const axios = require("axios");
const calcVars = require('./calcVars.js')
const fixMissing = require('./fixMissing.js')
const makeObject = require('./makeObject.js')
const fs = require('fs')
const url = "https://api.synopticdata.com//v2/stations/metadata?gacc=gbcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8";


getStations(url)
  // .then(e => console.log(e))
  .then((g)=>{requestStationData(g)})
  // .then((h)=>{console.log(h)}) 


async function getStations(url) {
    const resp = await axios.get(url);
    const data = resp.data;
    // console.log(data)
    const dataArray = filterStations(data);
    return dataArray
}

async function createObject(data){
  const resp = await fixMissing(data)
  const finalObj = await makeObject(resp)
  const stn = finalObj.station;
  console.log('stn',stn)
  fs.writeFile(`./stnData/`+stn+`wxData.json`, JSON.stringify(finalObj), err => {
    if (err) {
      return console.log(err)
    }
    console.log("file saved for " + stn)
  })
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
  stnArray.map((curr,i)=>{
    const stn = curr;
    const reqUrl = "https://api.synopticlabs.org/v2/stations/timeseries?&token=ea0ea69fd87b4eac81bfc08cb270b8e8&start=200701010000&end=200710312359&obtimezone=utc&output=json&stid=" + stn;
    if(i<10){
      const axiosReq = axios.get(reqUrl);
      axiosArray.push(axiosReq)
    }
  })

  Promise.all(axiosArray)
  .then((values)=>{
    values.map((curr,i)=>{
      const data = curr.data;
      const stn = data.STATION[0].STID;
      // const cal = fixMissing(data)
      const newObj = createObject(data)
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