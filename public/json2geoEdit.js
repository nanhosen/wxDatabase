




const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
const keys = Reflect.ownKeys;

if (!Object.values) {
    Object.values = function values(O) {
        return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
    };
}

if (!Object.entries) {
    Object.entries = function entries(O) {
        return reduce(keys(O), (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []), []);
    };
}

var map = new Map(Object.entries(isCritical));

var zones = [];
var statusArray = [];

function logMapElements(value, key, map){
    //console.log("zone: " + key + " status: " + value.status); 
    
    zones.push(key);
    statusArray.push(value.status);
    // var zoneStatus = {
    //     key: +"'"value.status + "'";
    //     console.log("zoneStatus: " + zoneStatus);
    // }

}
array1 = [];
array2 = []
new Map(map).forEach(logMapElements)
var finalarray = [];
zones.reduce(function(prev,curr,index) {
    var oo = {};
    var key = curr;
    oo[key] = statusArray[index];
    finalarray[index] = oo;
    // console.log(oo)
    // prev.push(oo);
    return prev;
}, finalarray);

// console.log(finalarray)
var zonePosition = {ID404: "0", ID405: "1", ID406: "2", ID407: "3", ID408: "4", ID409: "5", ID412: "6", ID418:"7", ID419: "8", NV453: "9", UT420:"10", UT421:"11", AZ102:"12", AZ101:"13", AZ104:"14", AZ105:"15", ID401:"16",ID402:"17", ID403:"18",ID410:"19",ID411:"20",ID413:"21",ID420:"22",ID421:"23",ID422:"24",ID423:"25",ID475:"26", ID476:"27", ID477:"28", UT422:"29", UT423:"30", ID400:"31", ID424:"32", ID425:"33", ID426:"34", ID427:"35", NV450:"36", NV455:"37", NV457:"38", NV458:"39", NV459:"40", NV460:"41", NV461:"42", NV462:"43", NV463:"44", NV464:"45", NV465:"46", NV466:"47", NV467:"48", NV468:"49", NV469:"50", NV470:"51", UT424:"52", UT478:"78", UT479:"79", UT480:"80", UT481:"81", UT482:"82", UT483:"83", UT484:"84", UT485:"85", UT486:"86", UT487:"87", UT488:"88", UT489:"89", UT490:"90", UT491:"91", UT492:"92", UT493:"93", UT494:"94", UT495:"95", UT496:"96", UT497:"97", UT498:"98", WY414:"99", WY415:"100", WY416:"101", NV454:"102"};
//console.log(map);
// var oneArray = Object.keys(isCritical);
// var twoArray = []
// newArray.map(function(c,i) {

// });
// var notSure = [];


// var fillZoneStatus = isCritical.reduce(function(prev, curr, j) {  
//     var oo = {};
//     var zone = curr['zone'];
//     var status = curr['status'];
//     oo[zone] = status;
//     prev.push(oo);
//     // prev.push([ curr['zone'], curr['status']]);
//     // console.log(prev);
// //   // prev[0].push(curr["zone"]);
// //   prev[1].push(curr["status"]);
// //   console.log(prev);
// //   console.log(prev[0]);
// // console.log(prev[1]);
// //   // c
//   return prev;
// }, notSure);

// console.log(JSON.stringify(notSure));
// function resSort (array) {
//   return array.map(function(current_value, index, initial_array) {
//     var oo = {};
//     // console.log(current_value);
//     var key = current_value['zone'];
//     // console.log(key);
//     // var str = current_value.attributes.IncNumber;
//     // var key = str.length = 15 ? str.slice(0, 4) + '-' + str.slice(4, 9) + '-' + str.slice(9, 15) : str.slice(0, 4) + '-' + str.slice(4, 10) + '-' + str.slice(9, 16) ; 
//     var Name = current_value['status'];
//     // console.log(Name);
//     oo[key] = Name;
//     return oo;
//   }); 
// }
// resSort(isCritical);

// var raws = [
//   {
//     "name":"Cart Creek",
//     "lat":40.884722,
//     "lon":-109.416944,
//     "id":420805,
//     "highest":104,
//     "p97":87,
//     "p90":81,
//     "p80":74,
//     "p70":68,
//     "p50":58
//   },
//   {
//     "name":"Catfish",
//     "lat":44.326111,
//     "lon":-117.169444,
//     "id":101402,
//     "highest":105,
//     "p97":98,
//     "p90":93,
//     "p80":89,
//     "p70":84,
//     "p50":73
//   },
//   {
//     "name":"3 Mile",
//     "lat":44.396,
//     "lon":-112.108,
//     "id":102004,
//     "highest":90,
//     "p97":84,
//     "p90":78,
//     "p80":69,
//     "p70":60,
//     "p50":52
//   },
//   {
//     "name":"Alligator Ridge",
//     "lat":39.737,
//     "lon":-115.518,
//     "id":260804,
//     "highest":111,
//     "p97":103,
//     "p90":98,
//     "p80":94,
//     "p70":90,
//     "p50":82
//   }
// ]
// var isCritical=
// [
//  {
//             "zone": "UT497",
//             "ERC": 78,
//             "ERC24": 73,
//             "ERC48": 69,
//             "ERC72": 83.5,
//             "ThreeDayAverage": 73.333333333333,
//             "ERC_threshold": 70,
//             "manual": "----Select Manual Override------",
//             "updated": "2016-06-20 11:56:54",
//             "expired": "Yes",
//             "cured": "Yes",
//             "elevation": "",
//             "center_id": "CDC-SIDLES",
//             "CWA": "SLC",
//             "justification": "",
//             "remarks": "",
//             "diff": 3.3333333333333,
//             "status": "critical"
//         },
//         {
//             "zone": "ID475",
//             "ERC": 79.6,
//             "ERC24": 79,
//             "ERC48": 79,
//             "ERC72": 78.8,
//             "ThreeDayAverage": 79.2,
//             "ERC_threshold": 55,
//             "manual": "----Select Manual Override------",
//             "updated": "2016-07-18 15:10:58",
//             "expired": "Yes",
//             "cured": "Yes",
//             "elevation": "",
//             "center_id": "CIC-KNA",
//             "CWA": "PIH",
//             "justification": "",
//             "remarks": "",
//             "diff": 24.2,
//             "status": "critical"    
//         }
//  ]
    
// var zone = [];
// var status = [];

// var vectorStyleCache = {};
// var vectorStyleFunction = function(feature) {
//   var zone = feature.get('STATE_ZONE');
//   var status = isCritical[zone]['status'];
//   var color;
//   var style = new ol.style.Style({
//     // fill: new ol.style.Fill({
//     //   color: color
//     // })
//     // ,
//     // stroke: new ol.style.Stroke({
//     //   color: color,
//     //   width: 4
//     // }),
//     // text: new ol.style.Text({
//     //   font: '.9rem Montserrat, sans-serif',
//     //   fill: new ol.style.Fill({
//     //     color: '#000'
//     //   })
//     //   // ,
//     //   // stroke: new ol.style.Stroke({
//     //   //   color: '#fff',
//     //   //   width: 3
//     //   // })
//     // })
//   });
//   if (status = 'critical') {
//     color = 'red';
//     style.getFill() = new ol.style.Fill({
//       color: color
//   })
//   if (stat)
//   return style;
// }

var xyz = new ol.layer.Tile({
      source: new ol.source.XYZ({
          url: 'http://maps.nypl.org/warper/maps/tile/11042/{z}/{x}/{y}.png'
      }),
      opacity: .5
    })

var fillcolor = '#FFCCFF';
var vectorLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    // url: 'layers/esrijson/gbPSA.json',
    // format: new ol.format.EsriJSON()
    //url: 'fireWxZoneJsonAll.json', this one works
    url: 'NWSFireWxZones.geojson', 
    // format: new ol.format.TopoJSON()
    format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 10000,
  visible: true,
  // style: vectorStyleFunction 

  style: function(feature, resolution) {
    var style = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgb(183, 183, 183)', //'rgba(0, 0, 0, 0.4)',
        width: 2
      }),
      text: new ol.style.Text({
        font: '15px Montserrat, sans-serif',
        fill: new ol.style.Fill({
          color: '#000'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(238, 238, 238, .7)',
          width: 3
        })
      })
    });

    // var fillcolor = '#FFCCFF';
  var zone = feature.get('STATE_ZONE');
    

    // console.log("zone: " + zone)
    // var status = isCritical["'"zone"'"]['status'];
  var status = isCritical[zone] ? isCritical[zone]['status'] : 'nodata';
   if (status=='critical'){
    style.getFill().setColor('rgba(160, 35, 28, 0.8)');
    var fillcolor = '#ccfeff';
     // return fillcolor;
    }
    if (status=='notcritical'){
      style.getFill().setColor('rgba(44, 107, 36, 0.8)');
      var fillcolor = '#6415cc';
      // return fillcolor;
    }
    if (status=='borderline'){
      style.getFill().setColor('rgba(249, 238, 31, 0.8)');
      var fillcolor = '#15cc7e';
      // return fillcolor;
    }
    if (status=='nodata'){
      style.getFill().setColor('rgba(176, 176, 176, 1)');
      var fillcolor = '#15cc7e';
      // return fillcolor;
    }
    // style.getFill() = new ol.style.Fill({
    //     color: color
    // })  
   
    style.getText().setText(resolution < 5000 ? feature.get('STATE_ZONE'): '');
    return style;
  }
});
    var selectZone = new ol.style.Style({
    // if (status=='borderline'){
      // var fillcolor = '#15cc7e';
      // console.log('borderline fillcolor: ' + fillcolor + 'styleZone '+ zone)
      // return fillcolor;
    // }
       fill: new ol.style.Fill({
        // color: fillcolor
        color: 'rgba(162, 0, 23, 0.1)'
        // if (status=='critical'){
        //     color: '#FFCCFF'
        // }
        // if (status=='notcritical'){
        //     color: '#FFCCFF'
        // }
        // if (status=='borderline'){
        //     color: '#FFCCFF'
        // }
        
       }),
      stroke: new ol.style.Stroke({
        color: '#FFCCFF',
        width: 2
     })
  });

var raster = new ol.layer.Tile({
  source: new ol.source.XYZ({
    attributions: 'Tiles © <a href="http://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
    url: 'http://server.arcgisonline.com/ArcGIS/rest/services/' +
        'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
  }),
  wrapX: false,
  minResolution: 1501,
  maxResolution: 50000
});

var stamenLayer = new ol.layer.Tile({
        source: new ol.source.Stamen({
          layer: 'toner-lite'
          // layer: 'terrain-lines'
        })
      });

var esriOceanBasemap = new ol.layer.Tile({
        source: new ol.source.Stamen({
          layer: 'toner-lite'
          // layer: 'terrain-lines'
        })
      });

/**
 * Elements that make up the popup.
 */
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');


/**
 * Create an overlay to anchor the popup to the map.
 */
var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
}));




/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */
closer.onclick = function() {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};



var map = new ol.Map({
  layers: [
    stamenLayer,
    //xyz,
    // new ol.layer.Tile({
    //   source: new ol.source.OSM(),
    //   wrapX: false,
    //   // minResolution: 0,
    //   // maxResolution: 1500
    // }),
    // new ol.layer.Tile({
    //   source: new ol.source.TileJSON({
    //     url: 'http://api.tiles.mapbox.com/v3/' +
    //          'mapbox.natural-earth-hypso-bathy.json',
    //     crossOrigin: 'anonymous'
    //   }),
    //   wrapX: false,
    //   minResolution: 1501,
    //   maxResolution: 50000
    // }),
    // raster,
    vectorLayer,
    // vectorLayer2  
  ],
  overlays: [overlay],
  target: 'map',
  view: new ol.View({
    center: [-12753260.184760537, 4948659.629345282],
    // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326', 'EPSG:3857'),
    zoom: 5.6,
    // minZoom: 5,
    // maxZoom: 9.8,
    extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
  }),
});

var selectClick = new ol.interaction.Select({
  condition: ol.events.condition.click,
  layers: [
    vectorLayer
  ],
  style: function(feature) {
    var zone = feature.get('STATE_ZONE');
    // var status = isCritical[zone]['status'];
    var status = isCritical[zone] ? isCritical[zone]['status'] : 'nodata';
    var color;
      if (status=='critical') {
        color = 'rgba(160, 35, 28, 1)'
      }
      if (status=='notcritical') {
        color = 'rgba(44, 107, 36, 1)'
      }
      if (status=='borderline') {
        color = 'rgba(249, 238, 31, 1)'
      }
      if (status=='nodata'){
        color = 'rgba(176, 176, 176, 1)';
      // return fillcolor;
    }
    // console.log(color);
    var style = new ol.style.Style({
      fill: new ol.style.Fill({
        color:  color
      }),
      stroke: new ol.style.Stroke({
        color: 'black',
        width: 2
      }),
      text: new ol.style.Text({
        font: '15px Montserrat, sans-serif',
        fill: new ol.style.Fill({
          color: '#000'
        }),
         stroke: new ol.style.Stroke({
          color: 'rgba(238, 238, 238, .7)',
          width: 3
        }),
        text: zone
      })
    });

    return style;

  }
});
/**
 * Add a click handler to the map to render the popup.
 */
 var zoneSelect;
map.addInteraction(selectClick);
selectClick.on('select', function(e) {

  var feature = e.selected[0];
  var coord = e.mapBrowserEvent.coordinate;
  zoneSelect = feature.get('STATE_ZONE');
console.log(typeof(zoneSelect));
  // console.log(zoneSelect)
  // var zoneERC = isCritical[zoneSelect]['ERC'];
  var zoneERC = isCritical[zoneSelect] ? isCritical[zoneSelect]['status'] : 'No Data';
  var ERC = isCritical[zoneSelect] ? isCritical[zoneSelect]['ERC'] : 'No Data';
  var ERC24 = isCritical[zoneSelect] ? isCritical[zoneSelect]['ERC24'] : 'No Data';
  var ERC48 = isCritical[zoneSelect] ? isCritical[zoneSelect]['ERC48'] : 'No Data';
  var ERC72 = isCritical[zoneSelect] ? isCritical[zoneSelect]['ERC72'] : 'No Data';
  var ThresholdText;

  // var status = isCritical[zoneSelect]['status'];
  var status = isCritical[zoneSelect] ? isCritical[zoneSelect]['status'] : 'No Data';
  // var obsUpdate = isCritical[zoneSelect]['date'];
  var obsUpdate = isCritical[zoneSelect] ? isCritical[zoneSelect]['obsdate'] : 'No Data';
  // var threeDayAverage = Math.round(isCritical[zoneSelect]['ThreeDayAverage']);
  // var threeDayAverage = isCritical[zoneSelect]['ThreeDayAverage'];
  var threeDayAverage = isCritical[zoneSelect] ? isCritical[zoneSelect]['ThreeDayAverage'] : 'No Data';
  // threeDayAverage=threeDayAverage.toFixed(1);
  // var Threshold = isCritical[zoneSelect]['ERC_threshold'];
   var Threshold = isCritical[zoneSelect] ? isCritical[zoneSelect]['ERC_threshold'] : 'No Data';
   // var Threshold1 = WY416[0]["ERC_threshold "] ? WY416[0]["ERC_threshold "] : 'No Data';
   // var updated = sinceApril[0]["updated"] ? sinceApril[0]["updated"] : 'No Data';
   var zoneHeader = document.getElementById("zoneHeader");
  // console.log('zoneSelect elevation: ' + zoneSelect);
  // console.log(zoneERC);
 
  console.log("positionArray:", positionArray.indexOf("ID475"));
  var zoneSelectPosition = zonePosition[zoneSelect];
  var arrayPosition = positionArray.indexOf(zoneSelect);
  console.log('arrayPosition', arrayPosition);
  console.log(zoneSelect);

  var getZoneObject = fetched5[zoneSelectPosition];
  console.log('zoneSelect position: ' + zoneSelectPosition);
  var accessZoneInfo=fetched4;
  console.log('zoneinfo: ' + fetched4[0]);
  // console.log('Get zone object: '+getZoneObject);
  var orderedByDate=[];
  getZoneObject[zoneSelect].map(function(curr, index) {
    var x = curr;
    var dateObj = Date.parse(x.updated);
    x.updated = dateObj;
    orderedByDate.push(x);
    });
  // console.log('ordered by date' + orderedByDate);
  var sortDate = getZoneObject[zoneSelect].sort(dynamicSort("updated"));
  // console.log('sort date: ' + sortDate[0]["updated"]);
  // console.log('sort date length: ' + sortDate.length);
  var accessObject = fetched5[zoneSelectPosition][zoneSelect];
  // console.log('position of zone: ' + zoneSelectPosition);
  // console.log('accessobject: ' + accessObject);
  var apr12016 = 1459468800000; //To get this number Date.parse("2016-04-01")
  var sinceApril = [];

    sortDate.filter(function(curr, index) {
        if(curr["updated"] >= apr12016) {
            sinceApril.push(curr);
        }
    })

    // console.log('since april: ' + sinceApril[0]['zone']);
    stuff.innerHTML = JSON.stringify(sinceApril);
  // console.log('accessobject: ' + fetched5[36][zoneSelect]);
  // console.log(Threshold1);
    // content.innerHTML = zoneSelect + ': ' + status;
  content.innerHTML = zoneSelect + ': ' + status + ' <br />3 Day ERC average: ' + threeDayAverage + ' <br />Critical Threshold:' + Threshold + '<br /> Observations updated ' + obsUpdate;
    // content.innerHTML = zoneSelect + ': ' + status + ' <br />3 Day ERC average: ' + threeDayAverage +  '<br /> Observations updated ' + obsUpdate;
    // content.innerHTML = 'Zone: <code>' + zoneSelect + '</code>';
  overlay.setPosition(coord);
  zoneHeader.innerHTML = 'Zone ' + zoneSelect;
  if(status=='notcritical'){
    zoneHeader.style.backgroundColor = 'rgba(86, 137, 80, 0.43)';
  }
  else if(status=='critical'){
    zoneHeader.style.backgroundColor = 'rgba(179, 79, 73, 0.77)';
  }

  else if(status=='borderline'){
    zoneHeader.style.backgroundColor = 'rgba(250, 241, 76, 0.75)';
  }  
  else {
    zoneHeader.style.backgroundColor = '#f5f5f5';
  } 
for (var i = 0; i < sinceApril.length; i++) { 
   ThresholdText += sinceApril[i]["ERC_threshold"] + "<br>";
}
var TableText;

for (var i = 0; i < sinceApril.length; i++) { 
    var newDate = new Date(sinceApril[i]["updated"]);
    var year = newDate.getFullYear();
    var month = newDate.getMonth();
    var day = newDate.getDate();
    var hour = newDate.getHours();
    var minutes = newDate.getMinutes();
    var seconds = newDate.getSeconds();
    var tableManual=sinceApril[i]["manual"];
    if (tableManual=="critical"){
        tableManual = "Critical";
    }
    else if (tableManual =="notcritical"){
        tableManual = "Not Critical";
        }
    else{
        tableManual = "No";
    }
    var ERCThresholdTable = sinceApril[i]["ERC_threshold "] ? sinceApril[i]["ERC_threshold "] : sinceApril[i]["ERC_threshold"];
    var curedTable = sinceApril[i]["cured "] ? sinceApril[i]["cured "] : sinceApril[i]["cured"];
   // TableText += '<tr><th scope="row">'+ newDate +'</th><td>' + sinceApril[i]["elevation"]+ '</td><td>' + curedTable + '</td><td>' + ERCThresholdTable + '</td><td>' + tableManual + '</td><td>' + sinceApril[i]["justification"] + '</td><td>' + sinceApril[i]["remarks"] + '</td></tr>';
   TableText += '<tr><th scope="row">'+ month + '/' + day + '/' + year + ' '+hour+':'+minutes+':'+seconds+' MDT </th><td>' + sinceApril[i]["elevation"]+ '</td><td>' + curedTable + '</td><td>' + ERCThresholdTable + '</td><td>' + tableManual + '</td><td>' + sinceApril[i]["justification"] + '</td><td style="word-wrap: break-word;min-width: 160px;max-width: 160px;">' + sinceApril[i]["remarks"] + '</td></tr>';
}

  // zoneHeader.style.backgroundColor = 'rgba(86, 137, 80, 0.43)';
  // document.getElementById("bigText").innerHTML = '<br /> Observations updated ' + obsUpdate;
  document.getElementById("zoneHistory").innerHTML = 'Observations updated ' + obsUpdate + ' <br />Critical Threshold: ' + Threshold + '<br />3 Day ERC average: ' + threeDayAverage + '<br />Current ERC: ' + ERC + ' ERC 24 hours ago: ' + ERC24+ ' ERC 48 hours ago: ' + ERC48 + '<br /> \
  <div class = "table-responsive"><table class="table table-responsive table-hover table-sm">  <thead><tr><th>Date</th><th>Elevation</th><th>Cured</th><th>ERC Threshold</th><th>Set Manually? \
  </th><th>Justification</th><th>Remarks</th></tr>  </thead><tbody>' + TableText + '</table></div>';
  // document.getElementById("zoneHistory").innerHTML = '<br /> Observations updated ' + obsUpdate + ' <br />Critical Threshold:' + Threshold + '3 Day ERC average: ' + threeDayAverage + 'Current ERC';
})


// var highlightStyleCache = {};

// var featureOverlay = new ol.layer.Vector({
//   source: new ol.source.Vector(),
//   map: map,
//   style: function(feature, resolution) {
//     var text = resolution < 5000 ? feature.get('') : '';
//     if (!highlightStyleCache[text]) {
//       highlightStyleCache[text] = new ol.style.Style({
//         stroke: new ol.style.Stroke({
//           color: '#f00',
//           width: 1
//         }),
//         fill: new ol.style.Fill({
//           color: 'rgba(255,0,0,0.1)'
//         }),
//         text: new ol.style.Text({
//           font: '12px Montserrat, sans-serif',
//           text: text,
//           fill: new ol.style.Fill({
//             color: '#000'
//           }),
//           stroke: new ol.style.Stroke({
//             color: '#f00',
//             width: 3
//           })
//         })
//       });
//     }
//     return highlightStyleCache[text];
//   }
// });

// var highlight;

// var displayFeatureInfo = function(pixel) {
  
//   var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
//     return feature; 
//   });
//   var info = document.getElementById('info');
//     if (feature) {
//       info.innerHTML =  feature.get('PSA_NAME') + ': ' + feature.get('NAT_CODE');
//     } 
//     else {
//       info.innerHTML = '';
//     }
//     if (feature !== highlight) {
//       if (highlight) {
//         featureOverlay.getSource().removeFeature(highlight);
//       }
//       if (feature) {
//         featureOverlay.getSource().addFeature(feature);
//       }
//       highlight = feature;
//     }
// }



// map.on('click', function(evt) {
//   var pixel = map.getEventPixel(evt.originalEvent);
//   displayFeatureInfo(pixel);
//   flyToDispatch(pixel);
// });

// map.updateSize();


// function getvar() {
//   //do stuff
// }

// var getvar = function() {
//   // do stuff
// }
// function +(x,y) {
//   // add x and y
// }
// +(2,3)
// var statement;
// Number(false) = 0;
// Number(null) 
// (!statement) ? do x : do y





map.getView().fit([ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ], (map.getSize()), {padding: [20, 80, 80, 80], constrainResolution: false})
// var perimeterExtent = [ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ];
// var size = map.getSize();
// map.getView().fit(perimeterExtent, size, {padding: [80, 80, 80, 80], constrainResolution: false})
// map.getView().setZoom(5);
// map.getView().setZoom(map.getView().getZoom()+1);

function dynamicSort(property) {
    var sortOrder = -1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

map.updateSize();

var mlabKey = 'XJGyTcrWEYUrzsEcUnxqany6FK7XsECM';

function ajax(options) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);
    xhr.responseType = '';
    xhr.onload = function() {
      if (this.status <= 200 && this.status < 300) {
        resolve(xhr.response);
      } 
      else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    if (options.headers) {
      Object.keys(options.headers).forEach(function(key) {
        xhr.setRequestHeader(key, options.headers[key]);
      });
    };
    var params = options.params;
    // We'll need to stringify if we've been given an object
    // If we have a string, this is skipped.
    if (params && typeof params === 'object') {
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    };
    xhr.send(params);
  });
}

// ajax({
//     method: 'POST',
//     url: 'https://api.mlab.com/api/1/databases/fuelzonemaps/collections/createdfeatures?&apiKey=' + mlabKey,
//     params: data,
//     headers: {
//         'Content-Type': 'application/json'
//     }
//   })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.error('damnit.', error.statusText);
//   });      
// }
var positionArray;
positionArray = [];
var fetched1;
var fetched2;
var fetched3;
var fetched4;
var fetched5;
var WY416;
var mlab = {
  method: 'GET',
  url: 'https://api.mlab.com/api/1/databases/fuel_status/collections/zoneinfo?apiKey=' + mlabKey,
  headers: {
    'Content-Type': 'application/json'
  }
}

ajax(mlab)
.then(function(first) {
  fetched1 = JSON.parse(first);
  // console.log(fetched1[0]);
   // = perims[0];
  return ajax({
    method: 'GET',
    url: 'https://api.mlab.com/api/1/databases/fuel_status/collections/password?l=1&apiKey=' + mlabKey,
    headers: {
      'Content-Type': 'application/json'
    }
  });
})
.then(function(second) {
  fetched2 = JSON.parse(second);
  // console.log('fetched2' + fetched2);
  return ajax({
    method: 'GET',
    url: 'NWSFireWxZones.geojson'
  });
})
.then(function(third) {
  fetched3 = JSON.parse(third);
   console.log('fetched3' + fetched3);
  return ajax({
    method: 'GET',
    // url: 'https://api.mlab.com/api/1/databases/fuel_status/collections/status?apiKey=' + mlabKey,
    // url: 'https://api.mlab.com/api/1/databases/fuel_status/collections/status?s={"zone":-1}&apiKey=' + mlabKey,
    url: 'https://api.mlab.com/api/1/databases/fuel_status/collections/zoneinfo?apiKey=' + mlabKey,
  });
})
.then(function(fourth) {
  fetched4 = JSON.parse(fourth);
  //return fetched4;
  // console.log('fetched 4: /n')
  // console.log(fetched4[0]['zone']);
  // console.log(WY416);
  return ajax({
    method: 'GET',
    // url: 'https://api.mlab.com/api/1/databases/fuel_status/collections/status?apiKey=' + mlabKey,
    // url: 'https://api.mlab.com/api/1/databases/fuel_status/collections/status?s={"zone":-1}&apiKey=' + mlabKey,
    url: 'https://api.mlab.com/api/1/databases/fuel_status/collections/schema?s={"updated":-1}&apiKey=' + mlabKey,
  });
})

.then(function(fifth) {
  fetched5 = JSON.parse(fifth);
  let stage1 = fetched5.map(function(curr, index) {
    var entry = Object.keys(curr)[1];
    // console.log(entry);
    return entry;
  });
  console.log(stage1)
  positionArray=stage1;

  return fetched4;
  console.log('fetched 4: /n')
   console.log(fetched5[0]['zone']);
   console.log(fetched4);
  // console.log(WY416);
})
.catch(function(error) {
  console.error('error.', error.statusText);
});      


// fetched5s.reduce(function(prev,curr,index) {
//     var oo = {};
//     var key = curr;
//     oo[key] = statusArray[index];
//     finalarray[index] = oo;
//     // console.log(oo)
//     // prev.push(oo);
//     return prev;
// }, finalarray);









