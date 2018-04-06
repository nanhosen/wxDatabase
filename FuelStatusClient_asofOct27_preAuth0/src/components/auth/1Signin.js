import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
	// handleFormSubmit({ email, password }) {
	handleFormSubmit(formProps) {
		// console.log(email, password);
		// need to do something to log the user in
		// this.props.signinUser({ email, password });
		this.props.signinUser(formProps);
	}

	renderAlert = () => {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger mt-2">
					<strong>{this.props.errorMessage}</strong>
				</div>
			)
		}
	}

	render() {
		// const { handleSubmit, fields : { email, password } } = this.props;
		const { handleSubmit } = this.props;
		return (
			<div className="mt-2">
				<form className="form-inline" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<label className="mr-sm-2">Email:</label>
					<Field name="email" component="input" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Email" />
					<label className="mr-sm-2">Password:</label>
					<Field name="password" component="input" type="password" className="form-control mb-2 mr-sm-2 mb-sm-0" />
				  <button action="submit" className="btn btn-primary">Sign in</button>
				</form>
				{this.renderAlert()}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {errorMessage: state.auth.error}
}
Signin = connect(mapStateToProps, actions)(Signin);

// export default reduxForm({
// 	form: 'signin',
// 	fields: ['email', 'password']
// })(Signin);

export default reduxForm({
	form: 'signin'
})(Signin);
