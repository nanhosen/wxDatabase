import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { HashRouter as Router } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import reduxThunk from 'redux-thunk'

import { AUTH_USER } from './actions/types'
import reducers from './reducers'
import App from './App'
import './index.css'

export const history = createHistory()
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

export const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token')

// if we have a token, consider the user to be signed in
if (token) {
	// we need to update the application state
	store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
	<Provider store={store}>
  	<Router history={history}>
    	<App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
