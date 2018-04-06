import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
	renderLinks = () => {
		if (this.props.authenticated) {
			return [
				<Link className="nav-link nav-item" to="/home" key={1}>Home</Link>,
				<Link className="nav-link nav-item" to="/zonegroup" key={2}>Zone Group</Link>,
				<Link className="nav-link nav-item" to="/signout" key={3}>Sign Out</Link>,
				<Link className="nav-link nav-item" to="/form" key={4}>Form</Link>
			];
		}
		else {
			return [
				<Link className="nav-link nav-item" to="/home" key={1}>Home</Link>,
				<Link className="nav-link nav-item" to="/signin" key={2}>Sign In</Link>,
				<Link className="nav-link nav-item" to="/signup" key={3}>Sign Up</Link>,
				<Link className="nav-link nav-item" to="/form" key={4}>Form</Link>
			];
		}
	}
	render() {
		console.log(this.props);
		return (
			<nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
				<Link to="/" className="navbar-brand">Redux Auth</Link>
				<div className="navbar">
					<div className="navbar-nav">
						{this.renderLinks()}
					</div>	
				</div>
			</nav>
		)
	}
}

const mapStateToProps = state => {
	const { authenticated } = state.auth;
	return { authenticated };
}

export default connect(mapStateToProps, null)(Header);
