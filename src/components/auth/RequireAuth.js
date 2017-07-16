import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchZoneData } from '../../actions'
// import { Redirect } from 'react-router-dom'

export default function(ComposedComponent) {
	class RequireAuth extends Component {
		componentWillMount() {
			if (!this.props.authenticated) {
				this.props.history.replace('/')
			}
		}
		componentDidMount() {
			this.props.fetchZoneData()
		}
		componentWillUpdate(nextProps) {
			if (!nextProps.authenticated) {
				this.props.history.replace('/')
			}
		}
		render() {
			// console.log(this.props)
			return <ComposedComponent {...this.props} />
		}
		// render() {
		// 	if (!this.props.authenticated) {
		// 		<Redirect to={{
  //       pathname: '/signin',
  //       state: { from: this.props.location }
  //     }} />
		// 	}
		// 	return <ComposedComponent {...this.props} />
		// }
	}

	// function mapStateToProps({ AuthenticationReducer }) { // get state object from header.js
	// 	return { AuthenticationReducer }
	// }
	const mapStateToProps = (state) => {
		const { authenticated } = state.auth
		const { isCritical } = state.isCritical
		return { authenticated, isCritical }
	}
	return connect(mapStateToProps, { fetchZoneData })(RequireAuth) // we're now wrapping a higher-order component with another HOC
}
