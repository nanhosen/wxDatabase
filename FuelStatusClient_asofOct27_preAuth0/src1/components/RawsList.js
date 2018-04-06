import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions';
/*
				<input
					checked={_.includes(this.props.zonesData, post.id)}
					type="radio"
					onChange={(e) => this.handleRawstSelect(e, post)}
				/>
*/

// const RawsList = props => {

// }
class RawsList extends Component {
	renderRaws = raws => {
		return (
			<li className="list-group-item" key={raws.RAWSid}>
				{raws.RAWSname}
			</li>
		)
	}

	render() {
		console.log(this.props.zonesData);
		return (
			<ul className="list-group">
				{ 
					// _.map(this.props.zonesData[0].raws, this.renderRaws)
				}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	const { zonesData } = state.auth;
	return { zonesData };
};

export default connect(mapStateToProps)(RawsList);