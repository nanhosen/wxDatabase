import OpenLayers from 'openlayers'

const PlaceLayer = new OpenLayers.layer.Vector({
	source: new OpenLayers.source.Vector({
		format: new OpenLayers.format.GeoJSON(),
		url: `http://www.geoforall.org/locations/OSGEoLabs.json`
	})
})

export default PlaceLayer