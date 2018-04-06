import React, { Component } from 'react'
import { connect } from 'react-redux'

import Status from './Status'

const noSelected = () => (
	<div className="card border-0">
		<h3 className="card-header" id="header" style={{textAlign: 'center'}}>Zone Information</h3>
		<div className="card-block">
			<p className="card-text" id="history" style={{width: "100%"}}>Select a Fire Weather Zone on the map for more detailed information</p>
		</div>
	</div>
)

class Info extends Component {
	state = { header: null, history: null }
  getHeight = target => {
    if (target !== null) {
    	// react@next: const name = `${target[Object.keys(target)[0]].memoizedProps.id}`
    	const name = `${target[Object.keys(target)[0]]._currentElement.props.id}`
    	const height = target.offsetHeight
      if (this.state[name] !== height) {
	      this.setState({ [name]: height })
      }
 			return 
    }
    return  	
  }  
	render() { 
		if (!this.props.zoneSelect.selected) { 
			return noSelected() 
		}
    const noData = {
			zoneERC: 'No Data',
			ERC: 'No Data',
			ERC24: 'No Data',
			ERC48: 'No Data',
			ERC72: 'No Data',
			status: 'No Data',
			obsdate: 'No Data',
			threeDayAverage: 'No Data',
			ERC_threshold: 'No Data',
    }
		const { zoneSelect } = this.props
		console.log('Info.js' + JSON.stringify(zoneSelect));
		const zoneData = zoneSelect.zoneData || noData
		const updates = this.props.status.filter(zone => {
			return zone.zone === zoneSelect.selected
		}) 
		// console.log(window.getComputedStyle(document.body).getPropertyValue('font-size'))
		return ( 
  		<div className="card border-0" style={{backgroundColor: '#EEEEEE'}}>
        
        <h3 className="card-header text-center text-white card-title" 
        	style={{backgroundColor: zoneSelect.color, textShadow: '#364230 1px 1px 1px'}}
        	ref={headerNode => this.getHeight(headerNode)}
        	id='header'
        >
  				{`Zone: ${zoneSelect.selected}`}
      	</h3>
    		
    		<div className="card-block rounded" style={{backgroundColor: '#ccc'}}>
        	<ul className="list-group" id="history" ref={ulNode => this.getHeight(ulNode)}>
        		<li className='list-group-item'>Observations updated on: {zoneData.obsdate || 'No Data'}</li>
        		<li className='list-group-item'>Critical Threshold: {zoneData.ERC_threshold}</li>
        		<li className='list-group-item'>3 Day ERC average: {zoneData.ThreeDayAverage}</li>
        		<li className='list-group-item'>Current ERC: {zoneData.ERC}</li>
        		<li className='list-group-item'>ERC 24 hours ago: {zoneData.ERC24}</li>
        		<li className='list-group-item'>ERC 48 hours ago: {zoneData.ERC48}</li>
        	</ul>
					<Status 
						updateHistory={updates}
						height={this.props.height}
						history={this.state.history}
						header={this.state.header}
					/>
  			</div> 
  		</div>
		)
	}
}
const mapStateToProps = reduxState => {
	const { zoneSelect } = reduxState
	return { zoneSelect }
}
export default connect(mapStateToProps)(Info)


	
