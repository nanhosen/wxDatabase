import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from './auth/Signin';
import Signout from './auth/Signout';
import Signup from './auth/Signup';
import Feature from './Feature';
import RequireAuth from './auth/RequireAuth';
import Home from './Home';

const routes = [
	{ path: '/signin',
		component: Signin,
		exact: true
	},
	{ path: '/signout',
		component: Signout,
		exact: true
	},
	{ path: '/signup',
		component: Signup,
		exact: true
	},
	{ path: '/feature',
		component: RequireAuth(Feature),
		exact: true
	},
	{ 
		component: Home
	},
];

const RouteWithSubRoutes = (route) => (
	<Route 
		path={route.path}
		render={props => (
			<route.component {...props} routes={route.routes} />
		)}
	/>
);

const Main = () => {
	return (
		<main>
  		<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</main>
	);
};

export default Main;