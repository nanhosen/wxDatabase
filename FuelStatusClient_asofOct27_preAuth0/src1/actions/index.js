import axios from'axios';
import { history } from '../index';
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_MESSAGE,
	POST_ZONES
} from './types';

const centerId =  "AZ-DUCK";

const ROOT_URL = 'http://localhost:3090';

const mlabKey = 'XJGyTcrWEYUrzsEcUnxqany6FK7XsECM';
export function signinUser(props) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signin`, props)
			.then(response => {
				localStorage.setItem('token', response.data.token);
				return axios.get(`https://api.mlab.com/api/1/databases/fuel_status/collections/zoneinfo?q={"center_id": "${centerId}"}&apiKey=${mlabKey}`);
			})
			.then(res => {
				const zones = res.data.map(obj => obj.zone);
				return Promise.all(
					zones.map(zone => {
						const item = { raws: null, status: null };
						return axios.get(`https://api.mlab.com/api/1/databases/fuel_status/collections/raws?q={"zone": "${zone}"}&apiKey=${mlabKey}`)
							.then(res => {
								item.raws = res.data;
								return axios.get(`https://api.mlab.com/api/1/databases/fuel_status/collections/status?q={"zone": "${zone}"}&s={"updated":-1}&l=1&apiKey=${mlabKey}`)
									.then(res => {
										item.status = res.data
										return item;
									});
							});
					})
				);
			})
			.then(res => {
				console.log(res);
				const payload = res;
				dispatch({ type: AUTH_USER, payload });
				history.push('/zonegroup');
			})
			.catch(() => {
				dispatch(authError('You sir, are an idiot'));
			});
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

export function signupUser(formProps) {
	return function(dispatch ){
		const { email, password } = formProps;
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then(response => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				history.push('/zonegroup');
			})
			.catch(error => dispatch(authError(error.response.data.error)));
	}
}

export function updateZone(formProps) {
	return function(dispatch ){
		const { elevation, threshold } = formProps;
		axios.post(`${ROOT_URL}/zones`, { elevation, threshold })
			.then(response => {
				dispatch({ type: POST_ZONES });
				localStorage.setItem('token', response.data.token);
				history.push('/zonegroup');
			})
			.catch(error => dispatch(authError(error.response.data.error)));
	}
}


export function signoutUser() {
	localStorage.removeItem('token');
	return { type: UNAUTH_USER };
};


export function fetchMessage() {
	return function(dispatch) {
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem('token') }
		})
			.then(response => {
				dispatch({
					type: FETCH_MESSAGE,
					payload: response.data.message
				});
			})
			.catch(error => console.log(error));
	}
};


// reduxPromise version of this code using reduxPromise middleware
// export function fetchMessage() {
// 	const payload = axios.get(ROOT_URL, {
// 		headers: { authorization: localStorage.getItem('token') }
// 	});

// 	return {
// 		type: FETCH_MESSAGE,
// 		payload
// 	}
// };