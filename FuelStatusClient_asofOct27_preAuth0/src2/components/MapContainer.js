import React, { Component } from 'react'
import PlaceLayer from '../layers/PlaceLayer'
import Map from './Map'

export default class MapContainer extends Component {
	render() {
		return (
			<div>
				<Map layer={PlaceLayer} />
			</div>
		)
	}
}