import { POST_ZONES } from '../actions/types';

export default function(state = {}, action) {
	switch(action.type){
		case POST_ZONES:
			return {...state, message: action.payload }
		default:
			return state;	
	}
};
