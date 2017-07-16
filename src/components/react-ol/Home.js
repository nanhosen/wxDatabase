import React, { Component } from 'react';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

import '../Home.css';
import ZoneLayer from './ZoneLayer'

class Home extends Component {
	render() {
		return (
			<div className="row">

   			<div className="col-sm-6"> 

	      	<div className="card">
	       		<h3 id='info' className="card-header text-muted text-center">Observations updated on (Date)</h3>

					    <Map view={{center: [0, 0], zoom: 2}} >
					      <Layers>
					        <layer.Tile/>
					        <ZoneLayer />
					      </Layers>

					      <Controls attribution={false} zoom={true}>
					        <control.Rotate />
					        <control.ScaleLine />
					        <control.FullScreen />
					        <control.OverviewMap />
					        <control.ZoomSlider />
					        <control.ZoomToExtent />
					        <control.Zoom />
					      </Controls>

					    </Map>

      		

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