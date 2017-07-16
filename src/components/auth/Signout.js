import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signout extends Component {
	render() {
		return (
			<Link
				to='/'
				style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1.5rem'}}
				className="font-weight-bold nav-link nav-item" 
				onClick={() => this.props.signoutUser()}
			>
				Exit
			</Link>
		)
	}
}

export default connect(null, actions)(Signout)