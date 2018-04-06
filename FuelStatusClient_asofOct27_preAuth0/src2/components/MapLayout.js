import React, { Component } from 'react'
import MapContainer from './MapContainer'

export default class MapLayout extends Component {
	render() {
		return (
			<div className='app'>
				<MapContainer />
			</div>
		)
	}
}