import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { SERVER_URL } from '../utils/config';
import { checkHttpStatus, parseJSON } from '../utils';
<<<<<<< HEAD
import { PROFILE_FETCH_FAILURE, PROFILE_FETCH_SUCCESS, PROFILE_FETCH_REQUEST, PROFILE_FETCH_ACTIVITY_LOG } from '../constants';
=======
import { PROFILE_FETCH_FAILURE, PROFILE_FETCH_SUCCESS, PROFILE_FETCH_REQUEST, HISTORY_FETCH_FAILURE, HISTORY_FETCH_REQUEST, HISTORY_FETCH_SUCCESS, PROFILE_FETCH_ACTIVITY_LOG } from '../constants';
>>>>>>> dcff13ef6a4d142721c1b7c285e0708cdec2aeeb

export function fetchSuccess(payload) {
    return {
        type: PROFILE_FETCH_SUCCESS,
        payload: payload
    }
}

export function fetchRequest() {
    return {
        type: PROFILE_FETCH_REQUEST
    }
}

export function fetchFailure() {
    return {
        type: PROFILE_FETCH_FAILURE
    }
}

export function fetchActivitySuccess(payload) {
    return {
        type: PROFILE_FETCH_ACTIVITY_LOG,
        payload: {
            activityLog: payload
        }
    }
}

export function fetchHistorySuccess(payload) {
    return {
        type: HISTORY_FETCH_SUCCESS,
        payload: payload
    }
}

export function fetchHistoryRequest() {
    return {
        type: HISTORY_FETCH_REQUEST
    }
}

export function fetchHistoryFailure() {
    return {
        type: HISTORY_FETCH_FAILURE
    }
}

export function fetchHistoryData(token) {
    return (dispatch) => {
<<<<<<< HEAD
        dispatch(fetchRequest());
        fetch(`${SERVER_URL}/api/v1/portfolios/portfolio/`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Token ' + token
            },
        }).then(checkHttpStatus)
=======
        dispatch(fetchHistoryRequest());
        fetch(`${SERVER_URL}/api/v1/portfolios/historical/`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Token ' + token
                },
            }).then(checkHttpStatus)
>>>>>>> dcff13ef6a4d142721c1b7c285e0708cdec2aeeb
            .then(parseJSON)
            .then((response) => {
                dispatch(fetchHistorySuccess(response));
            })
            .catch((err) => {
                // TODO ERROR HANDLING
                dispatch(fetchHistoryFailure());
                throw err;
            });
    }

}

export function fetchProfileData(token) {
    return (dispatch) => {
        dispatch(fetchRequest());
        fetch(`${SERVER_URL}/api/v1/portfolios/portfolio/`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Token ' + token
            },
        }).then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(fetchSuccess(response));
            })
            .catch((err) => {
                // TODO ERROR HANDLING
                dispatch(fetchFailure());
                throw err;
            });
    }
}

export function fetchActivityLogData(token) {
    return (dispatch) => {
        fetch(`${SERVER_URL}/api/v1/portfolios/activity/`, {
            method: 'get',
            headers: {
                'Authorization': 'Token ' + token
            },
        }).then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(fetchActivitySuccess(response));
            })
            .catch((err) => {
                // TODO ERROR HANDLING
                dispatch(fetchFailure());
                throw err;
            });
    }
}