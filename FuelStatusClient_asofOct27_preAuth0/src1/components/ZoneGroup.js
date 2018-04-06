import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
// import Form from './Form';
import RawsList from './RawsList';

class ZoneGroup extends Component {
	componentWillMount() {

	} 

	onSubmit = formProps => {
	}

	render() {
		console.log(this.props.zonesData)
		return (
			<div>
				<div className="row">
		    	<div className="col-md-3" id="block2" style={{paddingLeft: '3px', paddingRight: '3px'}}>
			      <RawsList />
			    </div>
			  </div>
			  <div>
        	<button type="submit" className="btn btn-primary" style={{paddingTop: '8px', marginTop: '5px', marginLeft: '1px'}}>Submit</button>
        	<button type="button" className="btn btn-primary" style={{paddingTop: '8px', marginTop: '5px', marginLeft: '1px'}}>Clear Values</button>
      	</div>
	    </div>  
		);
	}
}

const mapStateToProps = state => {
	const { zonesData } = state.auth;
	return { zonesData }
}
ZoneGroup = connect(mapStateToProps, actions)(ZoneGroup);

export default reduxForm({
	form: 'ZoneGroupForm', 
})(ZoneGroup);
