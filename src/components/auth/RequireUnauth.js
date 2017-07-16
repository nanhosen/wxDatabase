import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
	class RequireUnauth extends Component {
		componentWillMount() {
			if (this.props.authenticated) {
				this.props.history.replace('/');
			}
		}
		componentWillUpdate(nextProps) {
			if (nextProps.authenticated) {
				this.props.history.replace('/');
			}
		}
		render() {
			return <ComposedComponent {...this.props} />
		}
	}

	// function mapStateToProps({ AuthenticationReducer }) { // get state object from header.js
	// 	return { AuthenticationReducer };
	// }
	const mapStateToProps = (state) => {
		const { authenticated } = state.auth;
		return { authenticated };
	}
	return connect(mapStateToProps)(RequireUnauth); // we're now wrapping a higher-order component with another HOC
}
