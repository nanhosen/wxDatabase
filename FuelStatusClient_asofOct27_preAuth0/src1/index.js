import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';

export const history = createHistory();
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')	
);


// import { AUTH_USER } from './actions/types';
// const token = localStorage.getItem('token');

// // if we have a token, consider the user to be signed in
// if (token) {
// 	// we need to update the application state
// 	store.dispatch({ type: AUTH_USER });
// }
