import React from 'react'
import ol from 'openlayers'
import { 
	interaction, 
	layer,
} from "react-openlayers"

const source = new ol.source.Vector({
  url: 'NWSFireWxZones.geojson', 
  format: new ol.format.GeoJSON()
})

const ZoneLayer = () => <layer.Vector source={source} />

export default ZoneLayer
