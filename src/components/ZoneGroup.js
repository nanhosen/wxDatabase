import React, { Component } from 'react'

import Zone from './Zone'

class ZoneGroup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			center_id: localStorage.center_id,
			zones: null,
		}
	}

	componentWillReceiveProps(nextProps) {
		const sorter = (a, b) => {
			const zoneA = Object.keys(a)[0]
			const zoneB = Object.keys(b)[0]
			return (zoneA < zoneB
							? -1
							: zoneA > zoneB
							? 1
							: 0)
		}
		const { isCritical } = nextProps
		if (this.state.center_id !== '999') {
			const zones = Object.keys(isCritical).reduce((prev, curr) => {
				if (isCritical[curr].center_id === this.state.center_id) {
					prev.push({ [curr]: isCritical[curr] })
				}
				return prev
			}, []).sort(sorter)
			this.setState({ zones })	
		}
		else {
			const zones = Object.keys(isCritical).reduce((prev, curr) => {
				prev.push({ [curr]: isCritical[curr] })
				return prev
			}, []).sort(sorter)
			this.setState({ zones })
		}
	}

	// renderZones = () => {
	// 	const { isCritical } = this.props
	// 	if (!isCritical) {
	// 		return <div>Loading</div>
	// 	}
	// 	else {
	// 		const zones = Object.keys(isCritical).reduce((prev, curr) => {
	// 			const o = {}
	// 			if (isCritical[curr].center_id === localStorage.center_id) {
	// 				o[curr] = isCritical[curr]
	// 				prev.push(o)
	// 			}
	// 			return prev
	// 		}, [])
	//     return (
	// 			<div className="row d-flex justify-content-around mb-5">
	// 				{
	// 					zones.map(zone => {
	// 						const key = Object.keys(zone)[0]
	// 						return <Zone 
	// 							{...zone}
	// 							key={key} 
	// 							form={key} 
	// 						/> 	
	// 					})
	// 				}
	// 			</div>
	//     )
	// 	}
	// }

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.zones ? false : true
	}

	render() {
		if (!this.state.zones) {
			return <div>Loading</div>
		}
    return (
			<div className="row d-flex justify-content-around mb-5">
				{
					this.state.zones.map(zone => {
						const key = Object.keys(zone)[0]
						return <Zone 
							{...zone}
							key={key} 
							form={key}
							// onClick={} 
						/> 	
					})
				}
			</div>
    )
		// return (
		// 	this.renderZones()
		// )
	}
}

export default ZoneGroup