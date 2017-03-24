import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { SERVER_URL } from '../utils/config';
import { checkHttpStatus, parseJSON } from '../utils';
import { PROFILE_FETCH_FAILURE, PROFILE_FETCH_SUCCESS, PROFILE_FETCH_REQUEST } from '../constants';

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
                console.log(response);
                dispatch(fetchSuccess(response));
            })
            .catch((err) => {
                // TODO ERROR HANDLING
                dispatch(fetchFailure());
                throw err;
            });
    }

}