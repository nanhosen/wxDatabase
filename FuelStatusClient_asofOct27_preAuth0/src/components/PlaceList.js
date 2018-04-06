import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectAction } from '../actions';

class PlaceList extends Component {
	onSelectClick = e => {
		const name = e.target.textContent
		this.props.selectAction(name)
	}

	createItem = place => {
		const {	selected } = this.props
		const name = place.name.replace(/<(?:.|\n)*?>/g, '')
		const selClass = (name === selected) ? 'selected' : ''
		return <li key={name} className={selClass} onClick={e => this.onSelectClick(e)}>{name}</li>
	}
	
	render() {
		// console.log(this.props)
		return (
			<div>
			  <hr />
        <h3>Visible locations (click to select):</h3>
				<ul>
					{this.props.places.map(this.createItem)}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { places, selected } = state.placeSelect
	return { places, selected }
}

export default connect(mapStateToProps, { selectAction })(PlaceList);


