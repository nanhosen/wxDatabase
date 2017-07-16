import {
  UPDATE_ZONE  
} from '../actions/types'

const intitialState = { response: null  }

export default function(state = intitialState, action) {
  switch(action.type) {
    case UPDATE_ZONE:
    	const { payload } = action
      return {  ...state, response: payload } 
    default:
      return state
  }
}
