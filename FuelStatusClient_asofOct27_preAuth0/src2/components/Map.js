import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import OpenLayers from 'openlayers'

export default class Map extends Component {
	componentDidMount() {
		this.loadMap()
	}

	loadMap() {
		const target = ReactDOM.findDOMNode(this.refs.map)

		const map = new OpenLayers.Map({
			target,
			layers: [
				this.props.layer,
				new OpenLayers.layer.Tile({
					source: new OpenLayers.source.OSM()
				}),
			],
			view: new OpenLayers.View({
				center: [949282, 6002552],
				zoom: 4,
			}),
		})
	}

	render() {
		if (this.loading) {

		}
		return (
			<div ref='map'></div>
		)
	}
}