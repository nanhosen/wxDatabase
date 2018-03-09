const axios = require("axios");


// async function fetchURLs() {
//     try {
//       // Promise.all() lets us coalesce multiple promises into a single super-promise
//       var data = await Promise.all([
//         /* Alternatively store each in an array */
//         // var [x, y, z] = await Promise.all([
//         // parse results as json; fetch data response has several reader methods available:
//         //.arrayBuffer()
//         //.blob()
//         //.formData()
//         //.json()
//         //.text()
//         axios.get('https://api.synopticdata.com//v2/stations/metadata?gacc=gbcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8').then((response) => response.json()),// parse each response as json
//         axios.get('https://api.synopticdata.com//v2/stations/metadata?gacc=nwcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8').then((response) => response.json()),
//         axios.get('https://api.synopticdata.com//v2/stations/metadata?gacc=rmcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8').then((response) => response.json())
//       ]);

//       for (var i of data) {
//         console.log(`RESPONSE ITEM \n`);
//         for (var obj of i) {
//           console.log(obj);
//           //logger utility method, logs output to screen
//           console.log(obj);
//         }
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   }
// const request = require('request');

// var requestAsync = function(url) {
//     return new Promise((resolve, reject) => {
//         var req = request(url, (err, response, body) => {
//             if (err) return reject(err, response, body);
//             resolve(JSON.parse(body));
//         });
//     });
// };

var requestAsync = function(url) {
    return new Promise((resolve, reject) => {
        var req = axios.get(url, (err, response, body) => {
            if (err) return reject(err, response, body);
            resolve(JSON.parse(body));
        });
    });
};

const urls = [
    'https://api.synopticdata.com//v2/stations/metadata?gacc=gbcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8',
    'https://api.synopticdata.com//v2/stations/metadata?gacc=swcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8',
    'https://api.synopticdata.com//v2/stations/metadata?gacc=nwcc&network=1,2&sensorvars=1&token=ea0ea69fd87b4eac81bfc08cb270b8e8'
];

/* Works as of Node 7.6 */
var getParallel = async function() {
    //transform requests into Promises, await all
    try {
        var data = await Promise.all(urls.map(requestAsync));
    console.log(data);
    } catch (err) {
        console.error(err);
    }
    console.log('hi')
}

getParallel();