import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
// import Main from './components/Main'
// import Signin from './components/auth/Signin'
// import Signout from './components/auth/Signout'
import Signup from './components/auth/Signup'
import Feature from './components/Feature'
import RequireAuth from './components/auth/RequireAuth'
import RequireUnauth from './components/auth/RequireUnauth'
import Home from './components/Home'
// import Home from './components/react-ol/Home'

import ZoneGroup from './components/ZoneGroup'
// import MapContainer from './components/MapContainer'

const routes = [
	// { path: '/signin',
	// 	component: RequireUnauth(Signin),
	// 	exact: true
	// },
	// { path: '/signout',
	// 	component: Signout,
	// 	exact: true
	// },
	{ path: '/signup',
		component: RequireUnauth(Signup),
		exact: true
	},
	{ path: '/feature',
		component: RequireAuth(Feature),
		exact: true
	},
	{	path: '/zonegroup',
		component: RequireAuth(ZoneGroup),
		exact: true
	},
	// { path: '/map',
	// 	component: MapContainer,
	// 	exact: true
	// },
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
)

class App extends Component {
  render() {
    return (
      <div className="h-100">
      	<Header />
	    	<Switch>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>
      </div>
    )
  }
}

export default App
