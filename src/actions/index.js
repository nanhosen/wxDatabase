import axios from 'axios'
import { history } from '../index'
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR, 
	FETCH_MESSAGE,
	SELECT,
	FETCH_ZONE_DATA,
	UPDATE_ZONE,
	FETCH_STATUS,
	UPDATE_SUCCESS,
} from './types'


// const ROOT_URL = 'http://localhost:3090'
const ROOT_URL = 'https://gbccblm.us'

// export function signinUser({ email, password }) {
// export function signinUser(props) {
// 	return function(dispatch) { // reduxThunk middleware gives us access to the dispatch method
// 		// submit email/password to the server
// 		// axios.post(`${ROOT_URL}/signin`, { email, password })
// 		axios.post(`${ROOT_URL}/signin`, props)
// 			.then(response => {
// 				// if the request is good...
// 				// - Update state to indicate user is authenticated
// 				dispatch({ type: AUTH_USER })
// 				// - Save the JWT token
// 				localStorage.setItem('token', response.data.token)
// 				// - redirect to the route "/feature"
// 				history.push('/feature')
// 			})
// 			.catch(() => {
// 				// if the request is bad...
// 				// - Show an error to the user
// 				dispatch(authError('LOGIN PROCESS WENT TO HELL'))
// 			})
// 	}
// }

export function signinUser(props) {
	return function(dispatch) {
		// const { username } = props
		axios.post(`${ROOT_URL}/signin`, props)
			// .then(response => {
			// 	localStorage.setItem('token', response.data.token)
			// 	localStorage.setItem('center_id', response.data.center_id)
			// 	return response.data.center_id
			// 	// return axios.get(`https://api.mlab.com/api/1/databases/fuel_status/collections/zoneinfo?q={"center_id": "${centerId}"}&apiKey=${mlabKey}`)
			// })
			// .then(res => {
			// 	const zones = res.data.map(obj => obj.zone)
			// 	return Promise.all(
			// 		zones.map(zone => {
			// 			const item = { raws: null, status: null }
			// 			return axios.get(`https://api.mlab.com/api/1/databases/fuel_status/collections/raws?q={"zone": "${zone}"}&apiKey=${mlabKey}`)
			// 				.then(res => {
			// 					item.raws = res.data
			// 					return axios.get(`https://api.mlab.com/api/1/databases/fuel_status/collections/status?q={"zone": "${zone}"}&s={"updated":-1}&l=1&apiKey=${mlabKey}`)
			// 						.then(res => {
			// 							item.status = res.data
			// 							return item
			// 						})
			// 				})
			// 		})
			// 	)
			// })
			.then(res => {
				localStorage.setItem('token', res.data.token)
				localStorage.setItem('center_id', res.data.center_id)
				const payload = res
				dispatch({ type: AUTH_USER, payload })
				history.push('/zonegroup')
			})
			.catch(() => {
				dispatch(authError('You sir, are an idiot'))
			})
	}
}


export function signupUser(formProps) {
	return function(dispatch) {
		const { username, password } = formProps
		axios.post(`${ROOT_URL}/signup`, { username, password })
			.then(response => {
				dispatch({ type: AUTH_USER })
				localStorage.setItem('token', response.data.token)
				history.push('/zonegroup')
			})
			.catch(error => dispatch(authError(error.response.data.error)))
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

export function signoutUser() {
	localStorage.removeItem('token')
	localStorage.removeItem('center_id')
	return { type: UNAUTH_USER }
}

export function fetchMessage() {
	return function(dispatch) {
		// this get req works, but a similarly formatted post req does not
		// axios.get(ROOT_URL, { headers: { authorization: localStorage.getItem('token') } })
		// axios.post(`${ROOT_URL}/client`, { headers: { Authorization: localStorage.getItem('token') } })
		axios({ // this post works, the one above does not
		  method: 'post',
		  url: `${ROOT_URL}/client`,
		  headers: { Authorization: localStorage.getItem('token') }
		})		
			.then(response => {
				dispatch({ 
					type: FETCH_MESSAGE,
					payload: response.data.message
			 	})
			}).catch(error => console.log(error))
	}
}

// reduxPromise version of this code using reduxPromise middleware
// export function fetchMessage() {
// 	const payload = axios.get(ROOT_URL, {
// 		headers: { authorization: localStorage.getItem('token') }
// 	})

// 	return {
// 		type: FETCH_MESSAGE,
// 		payload
// 	}
// }

// export function visiblePlacesAction(places) {
//   return {
//     type: VISIBLE,
//     places
//   }
// }

export function fetchZoneData() {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/data`)
			.then(res => {
				const payload = res.data
				dispatch({ type: FETCH_ZONE_DATA, payload })
			})
			.catch(error => console.log(error))
	}
}

export function selectAction({ selected, color, zoneData }) {
  const payload = { selected, color, zoneData }
  return {
    type: SELECT,
		payload
  }
}

export function updateZone(formData) {
	return function(dispatch) {
		axios({ 
		  method: 'post',
		  url: `${ROOT_URL}/update`,
		  headers: { Authorization: localStorage.getItem('token') },
		  data: formData,
		})		
			.then(res => {
				const payload = res
				dispatch({ type: UPDATE_ZONE, payload })
			})
			.catch(error => console.log(error))
	}
}

export function updateSuccess() {
	return {
		type: UPDATE_SUCCESS
	}
}

export function fetchStatus() {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/status`)
			.then(res => {
				const payload = res.data
				dispatch({ type: FETCH_STATUS, payload })
			})
			.catch(error => console.log(error))		
	}
}
