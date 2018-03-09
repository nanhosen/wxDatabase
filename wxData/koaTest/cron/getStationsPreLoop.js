const axios = require("axios");
const calcVars = require('./calcVars.js')
const fs = require('fs')
const url = "https://api.synopticdata.com//v2/stations/metadata?gacc=gbcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8";
// const getLocation = async url => {
//   try {
//     const resp = await axios.get(url);
//     const data = resp.data;
//     const dataArray = filterStations(data);
//     console.log(dataArray)

//     // console.log(data)
//   } catch (error) {
//     console.log(error);
//   }

// };
// getLocation(url);

getStations(url)
  // .then(e => console.log(e))
  .then((g)=>{requestStationData(g)})
  // .then((h)=>{console.log(h)}) Here send to mongo or save to file system?


async function getStations(url) {
    const resp = await axios.get(url);
    const data = resp.data;
    // console.log(data)
    const dataArray = filterStations(data);
    return dataArray
}


    
async function requestStationData(g){
  // if(g[0]=="KSLC"){
  //   console.log('hey')
  // }
  const stn = g[0];
  const reqUrl = "https://api.synopticlabs.org/v2/stations/timeseries?&token=ea0ea69fd87b4eac81bfc08cb270b8e8&start=200701010000&end=200702030000&obtimezone=utc&output=json&stid=" + stn;
  const response = await axios.get(reqUrl);
  const data = response.data;
  // console.log('data', data.STATION[0].OBSERVATIONS.altimeter_set_1)
  // console.log(JSON.stringify(data))
  const cal = calcVars(data)
  fs.writeFile(`./`+stn+`wxData.json`, JSON.stringify(cal), err => {
      if (err) {
        return console.log(err)
      }
      console.log("file saved")
    })
  return cal
  // console.log(cal)
}


// async function searchForDoctorWho() {
//     try {
//         const albums = await searchItunes("https://api.synopticdata.com//v2/stations/metadata?gacc=gbcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8");
//         // for (const album of albums) {
//         //     console.log(album);
//         // }
//         const data = albums;
//         const dataArray = filterStations(data);
//         // console.log('dataArray', dataArray)
//         return dataArray
//     } catch (err) {
//         console.error(`Failed to retrieve results: ${err.message}`);
//         throw err;
//     }
// }

// function printResult(e){
//   var f = e[0];
//   return f
//   // console.log('f',f)
// }

// // searchItunes(url)
// searchForDoctorWho()
//     // .catch(err => console.log(err.message));
//     .then((e)=>{printResult(e)})
//     .then((g)=>{sayHi(g)})



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