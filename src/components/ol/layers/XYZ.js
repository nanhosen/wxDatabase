import OpenLayers from 'openlayers'

const XYZ = new OpenLayers.layer.Tile({
	source: new OpenLayers.source.XYZ({
		url: 'https://maps.nypl.org/warper/maps/tile/11042/{z}/{x}/{y}.png'
	}),
	opacity: . 5
})

export default XYZ
