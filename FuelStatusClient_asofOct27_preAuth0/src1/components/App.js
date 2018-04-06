import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Signin from './auth/Signin';
import Signout from './auth/Signout';
import Signup from './auth/Signup';
import ZoneGroup from './ZoneGroup';
import RequireAuth from './auth/RequireAuth';
import RequireUnauth from './auth/RequireUnauth';
import Home from './Home';
import Form from './Form';

const routes = [
	{ path: '/signin',
		component: RequireUnauth(Signin),
		exact: true
	},
	{ path: '/signout',
		component: Signout,
		exact: true
	},
	{ path: '/signup',
		component: RequireUnauth(Signup),
		exact: true
	},
	{ path: '/form',
		component: RequireAuth(Form),
		exact: true
	},
	{ 
		component: Home
	},
]

const RouteWithSubRoutes = route => (
	<Route 
		path={route.path}
		render={props => (
			<route.component {...props} routes={route.routes} />
		)}
	/>
);

class App extends Component {
	render() {
		return (
			<div>
				<Header className="mb-2" />
				<Switch>
					{routes.map((route, i) =>(
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>	
			</div>
		);
	}
}

export default App;

