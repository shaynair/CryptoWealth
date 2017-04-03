import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { SERVER_URL } from '../utils/config';
import { checkHttpStatus, parseJSON } from '../utils';
import { PROFILE_FETCH_FAILURE, PROFILE_FETCH_SUCCESS, PROFILE_FETCH_REQUEST, HISTORY_FETCH_FAILURE, HISTORY_FETCH_REQUEST, HISTORY_FETCH_SUCCESS } from '../constants';

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
        dispatch(fetchHistoryRequest());
        fetch(`${SERVER_URL}/api/v1/portfolios/historical/`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Token ' + token
                },
            }).then(checkHttpStatus)
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