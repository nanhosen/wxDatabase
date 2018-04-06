import React, { Component } from 'react';
import './Home.css';
// import './ol.js';

/*var style = {width: '100%';}
<p style={style}> </p>*/

class Home extends Component {
	componentWillMount() {

	}



	render() {
		return (
			<div className="row">
   			<div className="col-sm-6">       
	       <div className="card">
	       <h3 className="card-header text-center"> Great Basin Critical Fuel Status</h3>
         	<div id="map" className="map">

         	</div>
         		<div id="popup" className="ol-popup">
            	<a href="#" id="popup-closer" className="ol-popup-closer"></a>
            	<div id="popup-content"></div>
         		</div> 
         		<div id="info" className="card-footer text-muted text-center">Observations updated on (Date)</div>
    		 </div> 
   			</div> 
   			<div className="col-sm-6">
      		<div className="card">
        		<h3 className="card-header text-center" id="zoneHeader">Zone Information</h3>
        		<div className="card-block">
            	<p className="card-text" id="zoneHistory">Select a Fire Weather Zone on the map for more detailed information</p>
      			</div> 
      		</div> 
      		<div className="row">
  					<div className="col-sm-6">
    					<div className="card card-block">
      					<h3 className="card-title">Map Legend</h3>
			          <li className="list-group-item bg-danger text-white">Red: Zone is critical</li>
			          <li className="list-group-item bg-warning text-white">Yellow: Zone is approaching critical</li>
			          <li className="list-group-item bg-success text-white">Green: Zone is not critical</li>
			          <li className="list-group-item bg-faded">Grey: Missing Data</li>
    					</div>
  					</div>
					</div>
   			</div> 
			</div> 
		);
	}
}

export default Home; 