import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import * as actions from '../../actions'

const Select = ({ input, label, placeholder, type, checked, meta: { touched, error, invalid } }) => (
     <select {...input} id="specialists" className='custom-select' onchange="e => e.preventDefault()" >
      <option defaultValue="Select Group">Select Group</option>
      <option value="Admin">Admin</option>
      <option value="AZ-Fleming">AZ-Fleming</option>
      <option value="Battle Mountain Group">Mountain Group</option>
      <option value="BDC-Hislop">BDC-Hislop</option>
      <option value="BDC-Low">BDC-Low</option>
      <option value="Carson City Group">City Group</option>
      <option value="CDC-Tobler">CDC-Tobler</option>
      <option value="CDC-East">CDC-East</option>
      <option value="CDC-Harris">CDC-Harris</option>
      <option value="CDC-Shakespear">CDC-Shakespear</option>
      <option value="CIC-Sever">CIC-Sever</option>
      <option value="EIC-Pipkin">EIC-Pipkin</option>
      <option value="Elko Group">Elko Group</option>
      <option value="Ely Group">Ely Group</option>
      <option value="MFC">MFC</option>
      <option value="NUC-West">NUC-West</option>
      <option value="NUC-East">NUC-East</option>
      <option value="PAC">PAC</option>
      <option value="RFC-East">RFC-East</option>
      <option value="RFC-Manti">RFC-Manti</option>
      <option value="SCC-Fair">SCC-Fair</option>
      <option value="SCC-South">SCC-South</option>
      <option value="Southern Nevada">Southern Nevada</option>
      <option value="TDC-Norman">TDC-Norman</option>
      <option value="UBC-High">UBC-High</option>
      <option value="UBC-Low">UBC-Low</option>
      <option value="Winnemucca Group">Winnemucca Group</option>              
    </select>    
)

// <input {...input} placeholder={placeholder} type={type} className='form-control' style={{marginBottom: '.25rem'}}/>

class Signin extends Component {
	// handleFormSubmit({ email, password }) {
	handleFormSubmit(formProps) {
		// console.log(email, password)
		// need to do something to log the user in
		// this.props.signinUser({ email, password })
		this.props.signinUser(formProps)
	}

	renderAlert = () => {
		if (this.props.errorMessage) {
			document.getElementById('formDialog').classList.toggle('show')
			return (
				<div className="alert alert-danger mt-2">
					<strong>{this.props.errorMessage}</strong>
				</div>
			)
		}
	}

	render() {
		// const { handleSubmit, fields : { email, password } } = this.props
		const { 
			handleSubmit, 
			// reset 
		} = this.props
		return (
			<div id='formDialog'>
	      <a
	      	className="dropdown-toggle" href="#" data-toggle="dropdown" id="navLogin"
	      	style={{
	      		color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1.5rem',
	      		fontWeight: 'bold'
	      	}}
	      >
	      	Fuel Specialist Login
	      </a>
				<div className="dropdown-menu" style={{padding: "17px", backgroundColor: '#a39a64'}}>
					<form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<Field 
							component={Select}
							// className="form-control" 
							placeholder="Select Group"
							style={{backgroundColor: '#bbd7d6', textIndent: '7px'}}
							name="username" 
							// list="specialists" 
							onFocus={() => this.props.authError(null)}
						/>
						<datalist id="specialists">
              <option value="Admin">Admin</option>
              <option value="AZ-Fleming" />
              <option value="Battle Mountain Group" />
              <option value="BDC-Hislop" />
              <option value="BDC-Low" />
              <option value="Carson City Group" />
              <option value="CDC-Tobler" />
              <option value="CDC-East" />
              <option value="CDC-Harris" />
              <option value="CDC-Shakespear" />
              <option value="CIC-Sever" />
              <option value="EIC-Pipkin" />
              <option value="Elko Group" />
              <option value="Ely Group" />
              <option value="MFC" />
              <option value="NUC-West" />
              <option value="NUC-East" />
              <option value="PAC" />
              <option value="RFC-East" />
              <option value="RFC-Manti" />
              <option value="SCC-Fair" />
              <option value="SCC-South" />
              <option value="Southern Nevada" />
              <option value="TDC-Norman" />
              <option value="UBC-High" />
              <option value="UBC-Low" />
              <option value="Winnemucca Group" />              
            </datalist>	
				
						<Field name="password" component="input" type="password" className="form-control" placeholder="Password"
							style={{backgroundColor: '#bbd7d6', textIndent: '7px'}}
							onFocus={() => this.props.authError(null)}
						/>
						<br />
					  <button 
					  	action="submit"
					  	className="btn"
	          	style={{marginTop: "5px", backgroundColor: 'rgb(124, 104, 60)', color: 'rgb(187, 215, 214)', fontWeight: 'bold', textShadow: '#364230 1px 1px 1px'}}
					  >
					  	Sign in
					  </button>
					</form>
					{this.renderAlert()}
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {errorMessage: state.auth.error}
}
Signin = connect(mapStateToProps, actions)(Signin)

// export default reduxForm({
// 	form: 'signin',
// 	fields: ['username', 'password']
// })(Signin)

export default reduxForm({
	form: 'signin'
})(Signin)