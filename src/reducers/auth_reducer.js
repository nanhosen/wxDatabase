import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from '../actions/types'

export default function(state = {}, action) {
	switch(action.type) {
		case AUTH_USER:
			return {...state, error: null, authenticated: true, center_id: action.payload}
		case UNAUTH_USER:
			return { ...state, error: null, authenticated: false, center_id: null}
		case AUTH_ERROR:
			return { ...state, error: action.payload}
		default:
			return state
	}
}