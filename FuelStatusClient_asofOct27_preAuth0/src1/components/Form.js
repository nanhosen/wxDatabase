import React, { Component } from 'react';
import { Field } from 'redux-form';
import * as actions from '../actions';

class Form extends Component {
	constructor(props){
		super(props);
		this.state
	}
	render()	{
		const { handleSubmit, pristine, reset, submitting } = this.props;
		return (
			<div className="card card-block" style={{borderLeftWidth:'20px'}}>
				<form onSubmit={handleSubmit}>
					<h3 className="card-title">Fire Weather Zone ()</h3>
					<div>
		        <label className="card-text">Currently selected RAWS:</label>
		        <div className="form-check ">
		          <label className="form-check-label  d-block">
		          	<Field className="form-check-input" 
		          		name="RAWS" 
		          		component="input" 
		          		type="radio"
		          		value="RAWS1"
		          	/>
		          	261710-DESERT NWR
		          </label>
		          <label className="form-check-label  d-block">
		          	<Field className="form-check-input" 
		          		name="RAWS" 
		          		component="input" 
		          		type="radio" 
		          		value="RAWS2"
		          	/> 
		          	261711-YUCCA GAP
		          </label>
		        </div>
		        <p className="card-text"><a href="#">Change selected RAWS stations</a></p>
		        <div className="btn-group">
			        <label>Cured</label>
			        <div>
			          <Field name="Cured" component="select">
			            <option></option>
			            <option value="yes">Yes</option>
			            <option value="no">No</option>
			          </Field>
			        </div>
			      </div>
			      <div className="form-group row d-block">
			        <label>Elevation (feet)</label>
			        <div>
			          <Field name="elevation" component="input" type="text" placeholder="elevation"/>
			        </div>
			      </div>
			      <div className="form-group row d-block">
			        <label>ERC (Fuel Model G) Threshold</label>
			        <div>
			          <Field name="threshold" component="input" type="text" placeholder="threshold"/>
			        </div>
			      </div>
			      <div className="btn-group d-block">
			        <label>Set Status Manually? (will expire in 3 days)</label>
			        <div>
			          <Field name="manual" component="select">
			            <option></option>
			            <option value="critical">Critical</option>
			            <option value="notCritical">Not Critical</option>
			          </Field>
			        </div>
			      </div>
			      <div className="form-group row d-block">
			        <label>Override Justification</label>
			        <div>
			          <Field name="justification" component="input" type="text"/>
			        </div>
			      </div>
			      <div className="btn-group d-block">
			        <label>Email notification when status changes?</label>
			        <div>
			          <Field name="notification" component="select">
			            <option></option>
			            <option value="yes">Yes</option>
			            <option value="no">No</option>
			          </Field>
			        </div>
			      </div>
			      <div>
			        <label>Remarks?</label>
			        <div>
			          <Field name="remarks" component="textarea"/>
			        </div>
			      </div>
	      	</div>
      	</form>
			</div>
		);
	}
}

export default Form;


    
  // 



  // 
  //   <label for="example-text-input" className="col-2 col-form-label">Elevation (feet)</label>
  //   <div className="col-10">
  //     <input className="form-control" type="text" id="example-text-input" />
  //   </div>
  // </div>
  // <div className="form-group row">
  //   <label for="example-text-input" className="col-2 col-form-label">ERC (Fuel Model G) Threshold</label>
  //   <div className="col-10">
  //     <input className="form-control" type="text" id="example-text-input" />
  //   </div>
  // </div>
  // <div className="btn-group">
  //   <button className="btn btn-secondary btn-sm" type="button"  aria-haspopup="true" aria-expanded="false">
  //     Set Status Manually? (will expire in 3 days)
  //   </button>
  //   <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //     <span className="sr-only">Toggle Dropdown</span>
  //   </button>
  //   <div className="dropdown-menu">
  //     <a className="dropdown-item" href="#">Critical</a>
  //     <a className="dropdown-item" href="#">Not Critical</a>
  //   </div>
  // </div>
  // <div className="form-group row">
  //   <label for="example-text-input" className="col-2 col-form-label">Override Justification</label>
  //   <div className="col-10">
  //     <input className="form-control" type="text" id="example-text-input" />
  //   </div>
  // </div>
  // <div className="btn-group">
  //   <button className="btn btn-secondary btn-sm" type="button"  aria-haspopup="true" aria-expanded="false">
  //     Email notification when status changes?
  //   </button>
  //   <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //     <span className="sr-only">Toggle Dropdown</span>
  //   </button>
  //   <div className="dropdown-menu">
  //     <a className="dropdown-item" href="#">Yes</a>
  //     <a className="dropdown-item" href="#">No</a>
  //   </div>
  // </div>
  // <div className="form-group">
  //   <label for="exampleTextarea">Remarks?</label>
  //   <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
  // </div>
