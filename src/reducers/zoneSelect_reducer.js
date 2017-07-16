import {
  SELECT  
} from '../actions/types'

const intitialState = { selected: null, color: null  }

export default function(state = intitialState, action) {
  switch(action.type) {
    case SELECT:
    	const { selected, color, zoneData } = action.payload
      return { selected, color, zoneData } 
    default:
      return state
  }
}
