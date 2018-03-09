// const data = require('../data/GB01AllVars2007MaythruOct.js');
// const data = {"UNITS":{"air_temp_low_6_hour":"Celsius","wind_direction":"Degrees","pressure_tendency":"code","air_temp_high_6_hour":"Celsius","weather_cond_code":"code","wind_chill":"Celsius","cloud_layer_1_code":"code","sea_level_pressure":"Pascals","air_temp_high_24_hour":"Celsius","air_temp_low_24_hour":"Celsius","dew_point_temperature":"Celsius","ceiling":"Meters","elevation":"ft","visibility":"Statute miles","pressure":"Pascals","altimeter":"Pascals","wind_speed":"m/s","air_temp":"Celsius","cloud_layer_2_code":"code","cloud_layer_3_code":"code","relative_humidity":"%","position":"ft"},"QC_SUMMARY":{"QC_TESTS_APPLIED":["sl_range_check"],"TOTAL_OBSERVATIONS_FLAGGED":0,"PERCENT_OF_TOTAL_OBSERVATIONS_FLAGGED":0},"STATION":[{"STATUS":"ACTIVE","MNET_ID":"1","PERIOD_OF_RECORD":{"start":"1970-01-01T00:00:00Z","end":"2018-01-30T04:25:00Z"},"ELEVATION":"4226","NAME":"Salt Lake City, Salt Lake City International Airport","RESTRICTED":false,"STID":"KSLC","SENSOR_VARIABLES":{"air_temp_low_6_hour":{"air_temp_low_6_hour_set_1":{}},"wind_direction":{"wind_direction_set_1":{"position":"33"}},"pressure_tendency":{"pressure_tendency_set_1":{"position":"7"}},"air_temp_high_6_hour":{"air_temp_high_6_hour_set_1":{}},"weather_cond_code":{"weather_cond_code_set_1":{"position":"10"}},"wind_chill":{"wind_chill_set_1d":{"derived_from":["air_temp_set_1","wind_speed_set_1"]}},"wind_cardinal_direction":{"wind_cardinal_direction_set_1d":{"derived_from":["wind_direction_set_1"]}},"cloud_layer_1_code":{"cloud_layer_1_code_set_1":{"position":"3"}},"sea_level_pressure":{"sea_level_pressure_set_1d":{"derived_from":["pressure_set_1d","air_temp_set_1","relative_humidity_set_1"]},"sea_level_pressure_set_1":{"position":"7"}},"air_temp_high_24_hour":{"air_temp_high_24_hour_set_1":{}},"air_temp_low_24_hour":{"air_temp_low_24_hour_set_1":{}},"dew_point_temperature":{"dew_point_temperature_set_1d":{"derived_from":["air_temp_set_1","relative_humidity_set_1"]}},"ceiling":{"ceiling_set_1":{"position":"3"}},"air_temp":{"air_temp_set_1":{"position":"7"}},"visibility":{"visibility_set_1":{"position":"10"}},"pressure":{"pressure_set_1d":{"derived_from":["altimeter_set_1"]}},"altimeter":{"altimeter_set_1":{"position":"7"}},"wind_speed":{"wind_speed_set_1":{"position":"33"}},"date_time":{"date_time":{}},"cloud_layer_2_code":{"cloud_layer_2_code_set_1":{"position":"3"}},"cloud_layer_3_code":{"cloud_layer_3_code_set_1":{"position":"3"}},"relative_humidity":{"relative_humidity_set_1":{"position":"7"}},"weather_condition":{"weather_condition_set_1d":{"derived_from":["weather_cond_code_set_1","cloud_layer_3_code_set_1","cloud_layer_2_code_set_1","cloud_layer_1_code_set_1"]}}},"ELEV_DEM":"4242","LONGITUDE":"-111.96503","STATE":"UT","DATA_AFFECTED":false,"QC_FLAGGED":false,"LATITUDE":"40.77069","TIMEZONE":"America/Denver","ID":"53","OBSERVATIONS":{"altimeter_set_1":[87550.84,87521.84,87492.84,87521.84,87550.84,87550.84,87579.84,87608.84,87637.84,87608.84,87637.84,87666.84,87666.84,87695.84,87724.84,87695.84,87753.84,87811.84,87811.84,87811.84,87869.84,87898.84,87898.84,87927.84,87956.84,87956.84,87956.84,87927.84,87927.84,87927.84,87927.84,87927.84,87898.84,87927.84,87956.84,88014.84,88072.84,88101.84,88072.84,88072.84,88101.84,88159.84,88159.84,88130.84,88130.84,88188.84,88188.84,88130.84,88159.84,88246.84,88217.84,88246.84,88217.84,88188.84,88043.84,87985.84,87927.84,87927.84,87869.84],"wind_cardinal_direction_set_1d":["W","NNE","N","NNW","NW","NNW","NW","NNE","N","NNE","NNE","W","W","WNW","WNW","WNW","WNW","WNW","WNW","WNW","W","W","W","W","W","W",null,"WNW","NNW","NW","NW","NNW","NW","NW","W","WNW","W","WSW","E","SE","ESE","SE","SSE","SE","SE","SE","SE","SE","SE","SE","SSE","SSE","SSE","SSE","S","N","N","N","N"],"cloud_layer_3_code_set_1":[null,null,null,null,null,null,null,null,null,null,null,null,1304,1304,null,null,null,null,null,null,null,null,null,null,703,703,703,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2004,null,null,2004,null,1804,1804,null,null],"wind_chill_set_1d":[-5.71,null,null,-6.42,-7.4,null,-7.01,null,null,null,null,null,-5.47,null,-6.67,-6.43,-7.08,-6.83,-6.23,-6.43,-6.67,-6.43,-7.08,-6.83,-5.72,-5.94,null,-3.62,-3.99,-5,-4.78,-3.99,null,-3.26,-5.33,-4.4,-5.71,null,null,-7.72,-8.32,-9.78,-8.27,-9.6,-10.08,-9.6,-8.32,-10.08,-8.88,-7.72,-8.51,-6.06,-5.44,-3.09,-2.86,null,null,null,null],"sea_level_pressure_set_1":[102500,102450,102450,102480,102480,102450,102490,null,null,102500,102510,102570,null,102600,102630,null,102670,null,102740,null,102810,null,102870,null,102900,null,102900,102850,null,102850,null,102840,102810,102820,102890,102960,103080,103080,103080,103070,103110,103140,103160,103150,103140,103190,103230,103170,103220,103310,103240,103290,103240,103190,103010,102950,102890,102890,102860],"sea_level_pressure_set_1d":[87978.5,87980.09,87920.21,87980.09,88009.25,88034.99,88064.16,88077.83,88106.98,88067.54,88065.9,88095.05,88084.82,88124.19,88153.33,88113.95,88182.47,88230.51,88240.76,88230.51,88299.05,88317.92,88328.19,88347.06,88330.21,88325.13,88274.45,88190.03,88245.36,88245.34,88296.04,88245.35,88216.24,88215.15,88330.25,88388.5,88503.09,88506.56,88503.09,88591.15,88646.47,88704.82,88678.67,88707.16,88707.16,88765.54,88734.01,88707.13,88704.82,88766.17,88679.79,88652.21,88566.85,88507.31,88331.53,88273.35,88215.12,88245.34,88242.84],"cloud_layer_1_code_set_1":[1304,1304,1304,1304,1304,1304,176,173,133,133,134,104,122,126,184,133,132,143,143,163,183,143,143,142,156,156,156,213,212,213,212,202,206,206,356,356,306,306,306,306,306,2006,2002,2002,2003,2003,2003,2003,2003,653,603,603,603,606,1206,1206,1206,1302,1402],"weather_condition_set_1d":["Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Fog","Haze","Haze","Haze","Mostly Cloudy","Mostly Cloudy","Partly Cloudy","Mostly Cloudy","Partly Cloudy","Partly Cloudy","Partly Cloudy","Partly Cloudy","Partly Cloudy","Partly Cloudy","Mostly Clear","Mostly Clear","Mostly Clear","Mostly Clear","Mostly Clear","Mostly Clear","Partly Cloudy","Partly Cloudy","Mostly Cloudy","Mostly Cloudy","Mostly Cloudy","Mostly Cloudy","Mostly Cloudy","Haze","Haze","Haze","Haze","Haze","Haze","Overcast","Overcast",null,null],"air_temp_low_6_hour_set_1":[null,null,null,null,null,-3.9,null,null,null,null,null,null,null,null,-4.4,null,null,null,null,null,null,null,null,null,null,null,-2.2,null,null,null,null,null,null,null,-1.1,null,null,null,null,null,-5,null,null,null,null,null,-5.6,null,null,null,null,null,-5,null,null,null,null,null,-1.1],"air_temp_high_24_hour_set_1":[null,null,null,null,null,null,-0.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"pressure_set_1d":[74975.71,74950.87,74926.04,74950.87,74975.71,74975.71,75000.54,75025.38,75050.21,75025.38,75050.21,75075.05,75075.05,75099.88,75124.72,75099.88,75149.55,75199.22,75199.22,75199.22,75248.89,75273.72,75273.72,75298.56,75323.39,75323.39,75323.39,75298.56,75298.56,75298.56,75298.56,75298.56,75273.72,75298.56,75323.39,75373.06,75422.73,75447.57,75422.73,75422.73,75447.57,75497.24,75497.24,75472.4,75472.4,75522.07,75522.07,75472.4,75497.24,75571.74,75546.9,75571.74,75546.9,75522.07,75397.9,75348.23,75298.56,75298.56,75248.89],"pressure_tendency_set_1":[null,null,8004,null,null,1005,null,null,null,null,1010,null,null,null,1006,null,null,null,null,null,3012,null,null,null,null,null,9,null,null,null,null,6003,null,null,3003,null,null,1016,null,null,3001,null,null,3,null,null,3005,null,null,3007,null,null,6005,null,null,8025,null,null,6009],"ceiling_set_1":[3962.4,3962.4,3962.4,3962.4,3962.4,3962.4,3962.4,518.16,396.24,396.24,396.24,304.8,487.68,609.6,548.64,396.24,548.64,426.72,426.72,487.68,548.64,426.72,426.72,701.04,762,2133.6,2133.6,640.08,null,640.08,null,null,null,null,null,null,null,null,null,null,null,null,null,null,6096,6096,6096,6096,6096,1981.2,1828.8,1828.8,1828.8,6096,5486.4,5486.4,5486.4,6096,6096],"cloud_layer_2_code_set_1":[null,null,null,null,null,null,1304,1304,1304,1304,null,null,163,203,null,204,184,224,234,234,234,254,254,234,253,252,242,503,502,503,502,452,452,352,602,602,null,null,null,null,null,null,null,null,null,null,null,null,null,2003,1203,2004,2004,1202,1804,1502,1502,2004,2004],"relative_humidity_set_1":[84.84,88.71,84.84,88.71,88.71,92.07,87.99,92.79,92.79,92.11,88.1,88.1,86.15,88.1,88.1,86.15,88.1,86.15,88.1,86.15,84.84,86.15,84.84,86.15,78.24,74.22,65.92,66.68,63.94,69,68.78,65.92,65.92,60.75,68.76,68.76,74.56,71.86,74.56,80.83,80.76,80.76,80.83,79.42,79.42,79.42,77.09,85.82,80.76,80.83,77.96,74.66,68.87,63.45,60.75,58.02,66.06,69,78.24],"wind_speed_set_1":[2.57,1.54,0,2.57,3.6,1.54,2.57,1.54,2.06,1.54,1.54,1.54,2.57,2.06,3.6,3.6,4.12,4.12,3.09,3.6,3.6,3.6,4.12,4.12,4.12,4.63,2.06,5.14,3.6,5.14,3.09,3.6,2.06,3.6,3.6,2.57,2.57,2.06,1.54,2.57,2.57,4.12,3.09,3.09,3.6,3.09,2.57,3.6,3.09,2.57,5.14,3.6,4.63,2.57,3.09,0,0,0,0],"air_temp_set_1":[-2.2,-2.8,-2.2,-2.8,-2.8,-3.3,-3.3,-3,-3,-2.8,-2.2,-2.2,-2,-2.2,-2.2,-2,-2.2,-2,-2.2,-2,-2.2,-2,-2.2,-2,-1.1,-1,0,1.1,0,0,-1,0,0,0.6,-1.1,-1.1,-2.2,-1.7,-2.2,-3.9,-4.4,-4.4,-3.9,-5,-5,-5,-4.4,-5,-4.4,-3.9,-2.8,-1.7,-0.6,0,0.6,0.6,0.6,0,-1.1],"air_temp_high_6_hour_set_1":[null,null,null,null,null,-2.2,null,null,null,null,null,null,null,null,-2.2,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,1.1,null,null,null,null,null,-1.1,null,null,null,null,null,-3.9,null,null,null,null,null,-0.6,null,null,null,null,null,1.1],"date_time":["2007-01-01T00:55:00Z","2007-01-01T01:55:00Z","2007-01-01T02:55:00Z","2007-01-01T03:55:00Z","2007-01-01T04:55:00Z","2007-01-01T05:55:00Z","2007-01-01T06:55:00Z","2007-01-01T07:05:00Z","2007-01-01T07:35:00Z","2007-01-01T07:55:00Z","2007-01-01T08:55:00Z","2007-01-01T09:55:00Z","2007-01-01T10:20:00Z","2007-01-01T10:55:00Z","2007-01-01T11:55:00Z","2007-01-01T12:15:00Z","2007-01-01T12:55:00Z","2007-01-01T13:35:00Z","2007-01-01T13:55:00Z","2007-01-01T14:00:00Z","2007-01-01T14:55:00Z","2007-01-01T15:45:00Z","2007-01-01T15:55:00Z","2007-01-01T16:15:00Z","2007-01-01T16:55:00Z","2007-01-01T17:20:00Z","2007-01-01T17:55:00Z","2007-01-01T18:55:00Z","2007-01-01T19:45:00Z","2007-01-01T19:55:00Z","2007-01-01T20:15:00Z","2007-01-01T20:55:00Z","2007-01-01T21:55:00Z","2007-01-01T22:55:00Z","2007-01-01T23:55:00Z","2007-01-02T00:55:00Z","2007-01-02T01:55:00Z","2007-01-02T02:55:00Z","2007-01-02T03:55:00Z","2007-01-02T04:55:00Z","2007-01-02T05:55:00Z","2007-01-02T06:55:00Z","2007-01-02T07:55:00Z","2007-01-02T08:55:00Z","2007-01-02T09:55:00Z","2007-01-02T10:55:00Z","2007-01-02T11:55:00Z","2007-01-02T12:55:00Z","2007-01-02T13:55:00Z","2007-01-02T14:55:00Z","2007-01-02T15:55:00Z","2007-01-02T16:55:00Z","2007-01-02T17:55:00Z","2007-01-02T18:55:00Z","2007-01-02T19:55:00Z","2007-01-02T20:55:00Z","2007-01-02T21:55:00Z","2007-01-02T22:55:00Z","2007-01-02T23:55:00Z"],"dew_point_temperature_set_1d":[-4.44,-4.43,-4.44,-4.43,-4.43,-4.42,-5.03,-4.02,-4.02,-3.92,-3.93,-3.93,-4.03,-3.93,-3.93,-4.03,-3.93,-4.03,-3.93,-4.03,-4.44,-4.03,-4.44,-4.03,-4.45,-5.06,-5.68,-4.48,-6.09,-5.08,-6.08,-5.68,-5.68,-6.2,-6.18,-6.18,-6.16,-6.17,-6.16,-6.75,-7.25,-7.25,-6.75,-8.05,-8.05,-8.05,-7.86,-7.04,-7.25,-6.75,-6.15,-5.66,-5.68,-6.19,-6.2,-6.8,-5.08,-5.08,-4.45],"visibility_set_1":[6,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,7,9,9,8,8,8,8,10,10,10,10,10,10,8,7,7,8,8,8,8,8,8,6,6,6,6,6,6,7,7,7,6],"air_temp_low_24_hour_set_1":[null,null,null,null,null,null,-7.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,-5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"weather_cond_code_set_1":[31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,6,6,6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,6,6,6,6,6,6,null,null,null,6],"wind_direction_set_1":[280,30,0,330,320,330,310,20,10,20,30,270,280,290,290,290,290,290,290,290,280,280,280,280,280,280,null,290,330,320,320,330,320,320,270,290,280,250,100,140,120,140,150,140,140,130,130,140,140,130,150,150,150,150,180,0,0,0,0]}}],"SUMMARY":{"DATA_QUERY_TIME":"5.32507896423 ms","RESPONSE_CODE":1,"RESPONSE_MESSAGE":"OK","METADATA_RESPONSE_TIME":"0.0770092010498 ms","DATA_PARSING_TIME":"3.46684455872 ms","TOTAL_DATA_TIME":"8.79192352295 ms","NUMBER_OF_OBJECTS":1,"FUNCTION_USED":"time_data_parser"}};


// var max = 6048;


// while (max--) {
//    console.log(max)
// }

// console.log('station numbers' ,data.STATION.length)
// console.log(Object.keys(data.STATION[2].OBSERVATIONS))
// console.log(data.STATION[2].OBSERVATIONS.precip_accum_set_1.length)
// console.log(data.STATION[2].OBSERVATIONS.date_time.length)
// const elements = Object.keys(data.STATION[2].OBSERVATIONS);
// const elements = ['air_temp_set_1', 'relative_humidity_set_1', 'dew_point_temperature_set_1d', 'wind_gust_set_1', 'wind_speed_set_1', 'peak_wind_direction_set_1','precip_accum_set_1' ];
// const vars = ['MaxT', 'MinT', 'MaxRh', 'MinRh'];
// console.log(elements)

function calcVars(data){
	var stations = data.STATION.reduce(function(prev, curr, i){
		var stnId = curr.STID;

		// console.log(prev)
		// prev.push({"stnId" : stnId});
		return prev
	},[]);
	// var psa = data.PSA;
	// console.log(JSON.stringify(data.STATION[2].OBSERVATIONS.wind_gust_set_1))
	var t = ["T16", "T17", "T18", "T19", "T20", "T21", "T22", "T23", "T00", "T01", "T02", "T03", "T04", "T05", "T06"];
	var tMin = ["T04", "T05", "T06", "T07", "T08", "T09", "T10", "T11", "T12", "T13", "T14", "T15", "T16", "T17", "T18"];
	var tAll = ["T06", "T07", "T08", "T09", "T10", "T11", "T12", "T13", "T14", "T15", "T16", "T17", "T18", "T19", "T20", "T21", "T22", "T23", "T01", "T02", "T03", "T04", "T05"];
	var maxT = new Map;
	let x;
	let j = 0;
	let xM;
	let jM = 0;
	let xP;
	let jP = 0;
	var minT = new Map;
	var minTd = new Map
	var maxTd = new Map;
	var maxRh = new Map;
	var minRh = new Map;
	var maxGust = new Map;
	var maxWindSpeed = new Map;
	var pcpAccum = new Map;


	var stations = data.STATION.reduce(function(prev, curr, i){
		var stnId = curr.STID;
		var initial = curr.OBSERVATIONS;
		// console.log(Object.keys(initial))

		var indices = initial.date_time.reduce(function(prev, curr, i) {

		  var hour = t.filter(function(c) {
		    return curr.indexOf(c) >= 0
		  })
		  if (~curr.indexOf(hour[0])) {
		    if (j === 0) { 
		        // console.log('curr', curr)
		      x = curr
		      maxT.set(x, []);
		      maxTd.set(x, []);
		      maxRh.set(x, []);
		      maxGust.set(x, []);
		      maxWindSpeed.set(x, []);
		    }    
		    var o = {};
		    o[curr] = initial.air_temp_set_1[i]
		    maxT.get(x).push(initial.air_temp_set_1[i])
		    maxTd.get(x).push(initial.dew_point_temperature_set_1d[i])
		    maxRh.get(x).push(initial.relative_humidity_set_1[i])
		    // maxGust.get(x).push(initial.wind_gust_set_1[i])
		    maxWindSpeed.get(x).push(initial.wind_speed_set_1[i])
		    prev.push(o);
		  
		    (j <= 10) ? j += 1 : j = 0
		    // console.log(j)
		    return prev;
		  }
		  return prev;
		}, [])
		 // console.log(maxT)
		// console.log('max temp: ')
		var tempMax = [];
		maxT.forEach(function(value, key) {

		    // console.log(' Date: ' + key + ' temps: ' + value)
		  var o = [key, Math.max.apply(null, value)]
		  tempMax.push(o)
		});

		var tempDMax = [];
		maxTd.forEach(function(value, key) {
		  var o = [key, Math.max.apply(null, value)]
		  tempDMax.push(o)
		});

		var rhMax = [];
		maxRh.forEach(function(value, key) {
		  var o = [key, Math.max.apply(null, value)]
		  rhMax.push(o)
		});

		var gustMax = [];
		var gustAvg = [];
		// console.log(maxGust)
		// maxGust.forEach(function(value, key) {
		// 	var sum = value.reduce((prev, curr) => {
		// 		var add = prev + curr;
		// 		return add
		// 	})
		// 	var avg = sum/key.length;
		//     // console.log(' Date: ' + key + ' gust: ' + value)
		//   var o = [key, Math.max.apply(null, value)]
		//   gustMax.push(o)
		//   gustAvg.push([key,avg])
		// });

		var windSpeedMax = [];
		maxWindSpeed.forEach(function(value, key) {
		  var o = [key, Math.max.apply(null, value)]
		  windSpeedMax.push(o)
		});

		var indicesMin = initial.date_time.reduce(function(prev, curr, i) {
		  var hourMin = tMin.filter(function(c) {
		    return curr.indexOf(c) >= 0
		  })
		  if (~curr.indexOf(hourMin[0])) {
		    if (jM === 0) { 
		      xM = curr
		      minT.set(xM, []);
		      minTd.set(xM, []);
		      minRh.set(xM, []);
		    }    
		    var o = {};
		    o[curr] = initial.air_temp_set_1[i]
		    minT.get(xM).push(initial.air_temp_set_1[i])
		    minTd.get(xM).push(initial.dew_point_temperature_set_1d[i])
		    minRh.get(xM).push(initial.relative_humidity_set_1[i])
		    prev.push(o);
		  
		    (jM <= 10) ? jM += 1 : jM = 0
		    // console.log(j)
		    return prev;
		  }
		  return prev;
		}, [])


		var tempMin = [];
		var tdArray = [];
		minT.forEach(function(value, key) {
		  var o = [key, Math.min.apply(null, value)]
		  // console.log('o', o[1])
		      // console.log(' Date: ' + key + ' temps(min): ' + value)

		  tempMin.push(o)
		});

		var tempDMin = [];
		minTd.forEach(function(value, key) {
		  var o = [key, Math.min.apply(null, value)]
		      // console.log(' Date: ' + key + ' temps(min): ' + value)

		  tempDMin.push(o)
		});

		var rhMin = [];
		minRh.forEach(function(value, key) {
		  var o = [key, Math.min.apply(null, value)]
		      // console.log(' Date: ' + key + ' temps(min): ' + value)

		  rhMin.push(o)
		});

	var indices = initial.date_time.reduce(function(prev, curr, i) {

	  var hour = tAll.filter(function(c) {
	    return curr.indexOf(c) >= 0
	  })
	  if (~curr.indexOf(hour[0])) {
	    if (jP === 0) { 
	      xP = curr
	      pcpAccum.set(xP, []);
	    }    
	    var o = {};
	    // console.log(initial.precip_accum_set_1[i])
	    if(initial.precip_accum_set_1 != undefined){
	    	o[curr] = initial.precip_accum_set_1[i]
	    	pcpAccum.get(xP).push(initial.precip_accum_set_1[i])
	    	prev.push(o);
	    }
	    // 
	  
	    (jP <= 21) ? jP += 1 : jP = 0
	    // console.log(j)
	    return prev;
	  }
	  return prev;
	}, [])

	var pcpAccumArray = [];
	pcpAccum.forEach(function(value, key) {
	  var o = [key, Math.max.apply(null, value)]
	  pcpAccumArray.push(o)
	});
	var pcpAccumKeep = [];

	pcpAccumArray.map( (curr, index) => {
	  var prevAccum = pcpAccumArray[index-1] ? pcpAccumArray[index-1][1] : 0;
	  var currAccum = pcpAccumArray[index][1];
	  var newPcp = currAccum - prevAccum;
	  pcpAccumKeep.push(curr[0], newPcp)
	  })	

	// minT.forEach(function(value, key) {
	// 	  var o = [key, Math.min.apply(null, value)]
	// 	  // console.log('o', o[1])
	// 	      // console.log(' Date: ' + key + ' temps(min): ' + value)

	// 	  tempMin.push(o)
	// 	});


		prev.push({
			'id': stnId,
			// 'psa': psa,
			'tMax':tempMax,
			'tMin':tempMin,
			'tdMax':tempDMax,
			'tdMin':tempDMin,
			'rhMax': rhMax,
			'rhMin': rhMin,
			// 'gustMax': gustMax,
			// 'gustAvg': gustAvg,
			'maxWindSpeed': windSpeedMax,
			// 'precipAccum' : pcpAccumKeep
		})
		// prev.push({'stnId': stnId} ,{'MaxT': tempMax},{'MinT': tempMax});
		return prev

	},[])

	return stations
	// console.log(stations)
}
// calcVars(data)
// console.log(JSON.stringify(stations))
module.exports = calcVars


