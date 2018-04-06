import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

const Input = ({ input, label, type, meta: { touched, error, invalid } }) => (
  <div className={`form-inline mt-2 mb-2 ${touched && invalid ? 'has-danger' : ''}`}>
    <label className="mr-sm-2">{label}</label>
    <input {...input} placeholder={label} type={type} className='form-control mb-2 mr-sm-2 mb-sm-0' />
    <div className='form-control-feedback'> 
    	{touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

class Signup extends Component {
	onSubmit = formProps => {
		this.props.signupUser(formProps);
	}

	renderAlert = () => {
		if (this.props.errorMessage) {
			return (
				<div className='alert alert-danger mt-2'>
					<strong>Error: {this.props.errorMessage}</strong>
				</div>
			);
		}
	}
	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props; // given to us from reduxForm
		return (
			<form onSubmit={handleSubmit(this.onSubmit)} className='mt-2'>
				<h3>Sign Up</h3>
				<Field name="username" type="text" component={Input} label="Username" />
				<Field name="password" type="password" component={Input} label="Password" />
				<Field name="passwordConfirm" type="password" component={Input} label="Confirm Password" />
				<button type='submit' className='btn btn-primary mr-2' disabled={submitting}>Submit</button>
				<button type='button' disabled={pristine || submitting} onClick={reset} className='btn btn-warning mr-2'>
					Clear Values
				</button>
				{this.renderAlert()}
			</form>
		);
	}
}

const validate = fields => {
	const errors = {};
	if (!fields.username) {
    errors.username = 'Enter your username'
  } 
  if (!fields.password) {
    errors.password = 'Enter a password'
  } 
  if (!fields.passwordConfirm) {
    errors.passwordConfirm = 'Confirm your password'
  } 
  if (fields.password !== fields.passwordConfirm) {
  	errors.password = 'Passwords must match'
  }
  return errors;
}	

Signup = connect(state => ({ errorMessage: state.auth.error}), actions)(Signup);

export default reduxForm({
	form: 'SignupForm', 
	validate
})(Signup);

