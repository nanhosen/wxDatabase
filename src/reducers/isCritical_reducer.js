import {
  FETCH_ZONE_DATA,
  UPDATE_ZONE, 
  FETCH_STATUS,
  UPDATE_SUCCESS,
} from '../actions/types'

const intitialState = { response: null, isCritical: null, status: null }

export default function(state = intitialState, action) {
  switch(action.type) {
    case UPDATE_ZONE:
    	const { payload } = action
      let { status, isCritical } = payload.data
      return {  ...state, response: payload, isCritical, status } 
      // let { isCritical } = payload.data
      // return {  ...state, response: payload, isCritical }    
    case FETCH_ZONE_DATA:
      isCritical = action.payload
      return { ...state, isCritical } 
    case FETCH_STATUS:
      status = action.payload
      return { ...state, status }
    case UPDATE_SUCCESS: 
      return { ...state, response: null }       
    default:
      return state
  }
}