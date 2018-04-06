import {
  FETCH_ZONE_DATA,
  UPDATE_ZONE, 
  FETCH_STATUS,
  UPDATE_SUCCESS,
} from '../actions/types'

const intitialState = { 
  response: null, 
  isCritical: null, 
  status: null 
}
export default function(state = intitialState, action) {
  switch(action.type) {
    case UPDATE_ZONE:
    	const { payload } = action
      let { status, isCritical } = payload.data
      console.log('update zone reducer isCritical reducer isCritical', isCritical)
      return {  ...state, response: payload, isCritical, status } 
    case FETCH_ZONE_DATA:
      isCritical = action.payload
      console.log('fetch zone data iscritical reducer isCritical', isCritical)
      return { ...state, isCritical } 
    case FETCH_STATUS:
      status = action.payload
      console.log('fetch status iscritical reducer status', status)
      return { ...state, status }
    case UPDATE_SUCCESS: 
      console.log('update success iscritical reducer state', state)
      return { ...state, response: null }       
    default:
      return state
  }
}