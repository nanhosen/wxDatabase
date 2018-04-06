import {
  SELECT  
} from '../actions/types'

const intitialState = { selected: null }

export default function(state = intitialState, action) {
  switch(action.type) {
    case SELECT:
    	console.log('selected:', action.selected)
      return action.selected 
    default:
      return state
  }
}
