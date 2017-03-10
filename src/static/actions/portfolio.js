import fetch from 'isomorphic-fetch';

import { SERVER_URL } from '../utils/config';
import { checkHttpStatus, parseJSON } from '../utils';
import { DATA_FETCH_PORTFOLIO_REQUEST, DATA_RECEIVE_PORTFOLIO } from '../constants';


export function dataReceiveProtectedData(data) {
    return {
        type: DATA_RECEIVE_PORTFOLIO,
        payload: {
            data
        }
    };
}

export function dataFetchProtectedDataRequest() {
    return {
        type: DATA_FETCH_PORTFOLIO_REQUEST
    };
}

export function dataFetchProtectedData(risk, cash) {
    return (dispatch, state) => {
        dispatch(dataFetchProtectedDataRequest());
        return fetch(`${SERVER_URL}/api/v1/portfolios/risk/?risk=${risk}&cash=${cash}`, {
            credentials: 'include',
            headers: {
                Accept: 'application/json',
            }
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(dataReceiveProtectedData(response));
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined' && error.response.status === 401) {
                    // Invalid authentication credentials
                    console.log('invalid auth credentials');
                } else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
                    // Server side error
                    console.log('server side error');
                } else {
                    // Most likely connection issues
                    console.log('connection issues');
                }
            });
    };
}
