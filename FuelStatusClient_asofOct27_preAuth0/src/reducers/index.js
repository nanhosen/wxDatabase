import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './auth_reducer'
import fetchMsg from './fetchMsg_reducer'
// import placeSelect from './placeSelect_reducer'
import zoneSelect from './zoneSelect_reducer'
import isCritical from './isCritical_reducer'
// import updateZone from './updateZone_reducer'

function actionLogger(state = {}, action) {
	if (!action.type.startsWith(`@@redux`)) {
		// console.log('Current Action:', action)
	}
	return state
}

const rootReducer = combineReducers({
	// state: (state = {}) => state
	form,
	auth,
	fetchMsg,
	// placeSelect,
	zoneSelect, 
	isCritical,
	// updateZone,
	actionLogger,
})


export default rootReducer