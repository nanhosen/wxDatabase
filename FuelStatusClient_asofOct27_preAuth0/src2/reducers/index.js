import { combineReducers } from 'redux'

function actionLogger(state = {}, action) {
	if (!action.type.startsWith(`@@redux`)) {
		console.log('Current Action:', action)
	}
	return state
}

const reducers = combineReducers({
	actionLogger
})

export default reducers;