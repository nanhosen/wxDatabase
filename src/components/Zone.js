import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { updateZone, updateSuccess } from '../actions'

const Textarea = ({ input, label, placeholder, rows, type, meta: { touched, error, invalid } }) => (
  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
    <label className='text-white'
      style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1rem', marginBottom: '0rem', marginTop: '0rem'}}
    >
    {label}
    </label>
    <textarea {...input} placeholder={placeholder} type={type} className='form-control' rows={rows} 
      style={{marginBottom: '.25rem'}}
    />
    <div className='form-control-feedback'>
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
)

const Input = ({ input, label, placeholder, type, checked, meta: { touched, error, invalid } }) => (
  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
    <label className='text-white' 
      style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1rem', marginBottom: '0rem', marginTop: '0rem'}}
    >
    {label}
    </label>
    <input {...input} placeholder={placeholder} type={type} className='form-control'
      style={{marginBottom: '.25rem'}}
    />
    <div className='form-control-feedback'>
     {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
)

class Zone extends React.Component { 
  constructor(props) {
    super(props)
    // console.log(props)
    // this.state = { [props.form]: props[props.form], zone: props.form }
    this.state = { zone: props.form, ...props[props.form], response: null }
  }

  // componentWillMount() {
    // const { form } = this.props
    // const zone = this.props[form] 
    // this.setState({ ...{zone: form}, ...{rawsObject: zone.raws} })
    // Object.keys(zone.raws).map(curr => {
    //   const o = {}
    //   o[curr] = zone.raws[curr].selected 
    //   this.setState({o})
    // })    
    // Object.keys(zone.raws).map(curr => {
    //   const o = {}
    //   o[curr] = zone.raws[curr].selected 
    //   this.setState({
    //     rawsObject: o
    //   })
    // }) 

    // Object.keys(zone.raws).map(curr => {
    //   // const o = {}
    //   // o[curr] = zone.raws[curr].selected 
    //   this.setState((prevState, props) => {
    //     // console.log(Object.keys(prevState.rawsObject))
    //     prevState.rawsObject[`${curr}`] = zone.raws[curr].selected 
    //     return prevState
    //   })
    // })   
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.response) {
      const id = JSON.parse(nextProps.response.config.data).zone
      if (this.state.zone === id) {
        this.setState({ response: nextProps.response.data.message, ...nextProps.response.data.isCritical[id] })
        this.props.updateSuccess()
      }
      // else {
      //   if (this.state.response) {
      //     this.setState({ response: null })
      //   }
      // }
      // return      
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.response) {
  //     const id = JSON.parse(nextProps.response.config.data).zone
  //     if (nextState.zone !== id) {
  //       return false
  //     }
  //     else if (nextState.zone === id) {
  //       return true        
  //     }     
  //   }
  //   else {
  //     return true
  //   }
  // }

  _handleSubmit = formData => {
    // formData = {
    //   zone: this.state.zone,
    //   ...this.state[this.state.zone],
    //   ...formData,
    // }
    formData = { ...this.state, ...formData }
    this.props.updateZone(formData)
  }

  updated = () => {
    const { pristine, submitting, reset } = this.props
    if (this.state.response !== null && pristine === false) {
      return (
        <div className="card-footer btn-group" role="group">
          {this.state.response}
            <button
              className="btn btn-success"
              type="reset"
              onClick={() => {
                console.log(this.props)
                this.setState({ response: null })
                this.props.reset()
                this.updated()
              }}
            >
            Reset
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="card-footer btn-group" role="group">
          <button
            className="btn btn-success"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </button>
          <button 
            type="button"
            disabled={pristine || submitting} 
            onClick={reset}
            className='btn btn-warning'
          >
            Clear Values
          </button>
        </div>
      )        
    }
    
    // if (this.props.response) {
     
    //   const id = JSON.parse(this.props.response.config.data).zone
    //   if (this.state.zone === id) {
    //     return (
    //       <div className="card-footer btn-group" role="group">
    //         {this.props.response.data.message}
    //       </div>
    //     )
    //   }
    //   else {
    //     return (
    //       <div className="card-footer btn-group" role="group">
    //         <button
    //           className="btn btn-success"
    //           type="submit"

    //         >
    //           Submit
    //         </button>
    //         <button
    //           className="btn btn-danger fa fa-times"
    //         >
    //         </button>
    //       </div>
    //     )        
    //   }
    // }
    // else {
    //   return (
    //     <div className="card-footer btn-group" role="group">
    //       <button
    //         className="btn btn-success"
    //         type="submit"

    //       >
    //         Submit
    //       </button>
    //       <button
    //         className="btn btn-danger fa fa-times"
    //       >
    //       </button>
    //     </div>
    //   )
    // }    
  }

  render() {
    const { form, handleSubmit, pristine, submitting, reset } = this.props
    // const zone = this.state[this.state.zone]
    const zone = this.state
    return (
      <form className='card mt-4 border-0' onSubmit={handleSubmit(this._handleSubmit)}>
        <div className="card-header bg-inverse text-warning">
          <h4 className="card-title font-weight-bold mb-0">Fire Weather Zone {form}</h4>
        </div>        
        <div className="card-block" style={{backgroundColor: '#917946'}}>
          <div className='form-group'>
            <div className='bg-info text-white p-2 mb-2 rounded'
              style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1rem'}}
            >
              <label className='text-white my-0'>Currently Selected RAWS</label>
              {

                Object.keys(zone.raws).map(curr => {
                  const { selected } = zone.raws[curr]
                  return (
                    <div key={curr}>
                      <Field name={curr} component='input' type="radio" checked={selected} value={selected}
                        onChange={e => {
                          zone.raws[curr].selected = selected ? false : true
                          this.setState(prevState => ({ ...prevState, ...zone.raws }))
                        }}
                      />
                      {' '}
                      {`${curr} ${zone.raws[curr].RAWSname}`}                
                    </div>
                  )
                })
              }
            </div>
            <div>
              <label className='text-white' style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1rem', marginBottom: '0rem' }}>
                Cured: {`${zone.cured}`}
              </label>
              <div>
                <Field name="cured" component="select" style={{marginBottom: '.75rem'}}>
                  <option> ? </option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </Field>
              </div>
            </div>            
            <Field name='elevation' component={Input} label='Elevation (feet)' placeholder={`${zone.elevation}′`} />
            <div className='font-weight-bold' style={{color: 'white', textShadow: '#364230 1px 1px 1px', fontSize: '1rem', marginBottom: '0rem', marginTop: '.25rem' }}>
              Current 3 Day Average ERC: {zone.ThreeDayAverage}
            </div>
            <Field name='ERC_threshold' component={Input} label='ERC Threshold (Fuel Model G)' placeholder={zone.ERC_threshold} />
            <div className='font-weight-bold' style={{color: 'white', textShadow: '#364230 1px 1px 1px', fontSize: '1rem', marginBottom: '0rem', marginTop: '.25rem' }}>
              Current Manual Status: {function(status) {
                if (zone.manual_expires) {
                  return {'notcritical': 'Not Critical', 'critical': 'Critical', 'approachingcritical': 'Approaching Critical'}[status]
                }
                else return 'Not Set'
              }(zone.status)}
            </div>
            <div>
              <label className='text-white'
                style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1rem', marginBottom: '0rem' }}
              >
                Manual Fuel Status Override
              </label>
              <div>
                <Field name="manual" component="select" style={{marginBottom: '.75rem'}}>
                  <option className='text-muted'>Select Status
                    {
                      // zone.manual_expires ? function(status) {
                      //   return {'notcritical': 'Not Critical', 'critical': 'Critical', 'approachingcritical': 'Approaching Critical'}[status]
                      // }(zone.status) : ''
                    }
                  </option>
                  {
                    !this.state.manual_expires ? `` : <option value="not set">Remove Override</option>
                  }
                  <option value="notcritical">Not Critical</option>
                  <option value="approachingcritical">Approaching Critical</option>
                  <option value="critical">Critical</option>
                </Field>
              </div>
            </div>
            <Field name='justification' component={Textarea} label='Status Override Justification' className='text-muted'
              placeholder={!zone.manual_expires ? ' new override expires after 72 hours' : `ongoing override expires @ ${zone.manual_expires}`} rows={2} />            
            <div>
              <label className='text-white' style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1rem', marginBottom: '0rem' }}>
                Email notification when status changes? 
              </label>
              <div>
                <Field name="email" component="select" style={{marginBottom: '.75rem'}}>
                  <option />
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </Field>
              </div>
            </div>            
            <Field name='remarks' component={Textarea} label='Remarks' placeholder={null} rows={3} />
          </div>
        </div>
        <div className="card-footer" role="group">
        {
          !this.state.response
          ? (<button
              className="btn btn-primary"
              type="submit"
              disabled={pristine || submitting}
            >Submit</button>)
          : this.state.response !== 'update successful'
          ? (<button
              className="btn btn-outline-danger"
              type="submit"
              disabled={pristine || submitting}
            >Error</button>)
          : (
              setTimeout(() => {
                reset()
                this.setState({ response: null })
              }, 3000),
              (
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={pristine || submitting}
                  >Success
                </button>
              )
            ) 
        }
          <button 
            type="button"
            disabled={pristine || submitting} 
            onClick={reset}
            className='btn btn-warning ml-2'
          >
            Clear Values
          </button>
        </div>        
        {/*this.updated()*/}  
      </form>
    )
  }
}

const mapStateToProps = state => {
  const { response } = state.isCritical
  return { response }
}
Zone = connect(mapStateToProps, { updateZone, updateSuccess })(Zone)
export default reduxForm()(Zone)