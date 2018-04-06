import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';
import fetchMsg from './fetchMsg_reducer';
import postZones from './postZones_reducer';

const rootReducer = combineReducers({
	// state: (state = {}) => state
	form,
	auth,
	fetchMsg,
	postZones
});

export default rootReducer;