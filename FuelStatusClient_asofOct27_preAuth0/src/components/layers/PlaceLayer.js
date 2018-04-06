import OpenLayers from 'openlayers'

const PlaceLayer = new OpenLayers.layer.Vector({
	source: new OpenLayers.source.Vector({
		format: new OpenLayers.format.GeoJSON(),
		url: `OSGEoLabs.json`
	})
})

export default PlaceLayer