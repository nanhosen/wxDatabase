import React, { Component } from 'react'
import { connect } from 'react-redux'

import Info from './ol/Info'
import Legend from './ol/Legend'
import Map from './ol/Map'
import ZoneLayer from './ol/layers/ZoneLayer'
import './Home.css'

class Home extends Component {
  state = { height: null }

  getHeight = target => {
    if (target !== null) {
      const height = target.offsetHeight
      if (this.state.height !== height) {
        this.setState({ height })
      }
      return
    }
    return
  }
	render() {
    const { isCritical, status } = this.props
    // console.log('status: ' + JSON.stringify(isCritical))
    if (!isCritical || !status) {
      return <div>Loading</div>
    }
		return (
			<div className="row mx-2 h-100">

   			<div className="mt-4 col-12 col-md-6 mb-2"> 
	      	<div className="card h-100" 
            ref={node => this.getHeight(node)}
          > 
            <Legend className='border-0' />
            <Map layer={ZoneLayer(isCritical)} />
    		 	</div> 
   			</div> 
   			<div className="col-12 col-md-6 mt-4 mb-2">
          <Info status={status} height={this.state.height} />
          {
            // !status ? <Info /> : <Info status={status} />
          }
   			</div> 

			</div> 
		)
	}
}


const mapStateToProps = reduxState => {
  const { isCritical, status } = reduxState.isCritical
  return { isCritical, status }
}

export default connect(mapStateToProps)(Home)