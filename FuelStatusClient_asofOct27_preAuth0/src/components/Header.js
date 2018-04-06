import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

import { fetchZoneData, fetchStatus } from '../actions'
import RequireUnauth from './auth/RequireUnauth'
import Signin from './auth/Signin'
import Signout from './auth/Signout'

class Header extends Component {
  componentDidMount() {
    this.props.fetchZoneData()
    this.props.fetchStatus()
  }	
	renderLinks = () => {
		if (this.props.authenticated) {
			return [
				<Link
					style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1.5rem'}}
					className="font-weight-bold nav-link nav-item hidden-sm-down" to="/" key={1}>Home</Link>,
				<Link
					style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1.5rem'}}
					className="font-weight-bold nav-link nav-item" to="/zonegroup" key={2}>Zones</Link>,
				<Signout key={3} />,
			]
// <Link
//	style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1.5rem'}}
//	className="font-weight-bold nav-link nav-item" to="/feature" key={4}>Feature</Link>
		} 
		else {
			return [
				<Route exact path='/' component={RequireUnauth(Signin)} key={0} />
				// <Link
				// 	style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1.5rem'}}
				// 	className="font-weight-bold nav-link nav-item hidden-sm-down" to="/home" key={1}>Home</Link>,
				// <Link
				// 	style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1.5rem'}}
				// 	className="font-weight-bold nav-link nav-item" to="/signin" key={2}>Signin</Link>,
				// <Link className="nav-link nav-item" to="/signup" key={3}>Sign Up</Link>,
			]
		}
	}

	render() {
		return (
			<nav 
				className="navbar navbar-toggleable-sm navbar-light bg-faded"
				style={{backgroundColor: '#292b2c'}}
			>
			  <Link to="/" className="navbar-brand" href="#">
					<h1 
						className='d-inline-block'
						style={{color: 'rgba(187,215,214,1)', textShadow: '#364230 1px 1px 1px', fontWeight: 'bold', margin: '-.5rem 0rem -.5rem -1rem'}}
					>
						<img src="./GBCC_1b.png" 
							className="mr-1 img-fluid hidden-sm-down" 
							width="120" 
							height="80" 
							alt="responsive logo" 
						/>
						<img src="./GBCC_1b.png" 
							className="img-fluid hidden-md-up" 
							width="60" 
							height="40" 
							alt="responsive logo"
							style={{marginLeft: '50%'}} 
						/>						
						<p className='d-inline-block hidden-md-down ml-1 mr-0 mb-0'>Great Basin Fuel Status</p>
					</h1>
				</Link>

			  <div className="navbar" id="navbarNavAltMarkup">
			    <div className="navbar-nav">
						{this.renderLinks()}
			    </div>
			  </div>
					<img src="./PSlogo.png" 
						className="img-fluid hidden-sm-down float-right" 
						width="66" 
						height="81" 
						alt="responsive logo" 
					/>
			</nav>
		)
  }
}

const mapStateToProps = reduxState => {
	const { authenticated } = reduxState.auth
  const { isCritical, status } = reduxState.isCritical
  return { isCritical, authenticated, status }
}

export default connect(mapStateToProps, { fetchZoneData, fetchStatus })(Header)

		
				/*<Link
					style={{color: '#f89b2d', textShadow: '#364230 1px 1px 1px', fontSize: '1.5rem'}}
					className="font-weight-bold nav-link nav-item" to="/signout" key={3}>Sign Out</Link>,*/
		