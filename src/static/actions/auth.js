import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { SERVER_URL } from '../utils/config';
import { checkHttpStatus, parseJSON } from '../utils';
import {
    AUTH_LOGOUT_USER,
    AUTH_SIGNUP_USER_FAILURE,
    AUTH_SIGNUP_USER_REQUEST,
    AUTH_SIGNUP_USER_SUCCESS,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_SUCCESS,
} from '../constants';



export function authLoginUserSuccess(token, user) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
    return {
        type: AUTH_LOGIN_USER_SUCCESS,
        payload: {
            token,
            user
        }
    };
}

export function authSignUpUserSuccess() {
    return {
        type: AUTH_SIGNUP_USER_SUCCESS
    }
}

export function authSignUpUserFailure(error, message) {
    return {
        type: AUTH_SIGNUP_USER_FAILURE,
        payload: {
            status: error,
            statusText: message
        }
    }
}

export function authLoginUserFailure(error, message) {
    sessionStorage.removeItem('token');
    return {
        type: AUTH_LOGIN_USER_FAILURE,
        payload: {
            status: error,
            statusText: message
        }
    };
}

export function authLoginUserRequest() {
    return {
        type: AUTH_LOGIN_USER_REQUEST
    };
}

export function authSignUpUserRequest() {
    return {
        type: AUTH_SIGNUP_USER_REQUEST
    };
}



export function authLogout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    return {
        type: AUTH_LOGOUT_USER
    };
}

export function authLogoutAndRedirect() {
    return (dispatch, state) => {
        dispatch(authLogout());
        dispatch(push('/login'));
        return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
    };
}

export function authSignUpUser(username, password, email, redirect = "/login") {
    return (dispatch) => {
        dispatch(authSignUpUserRequest());
        return fetch(`${SERVER_URL}/api/v1/accounts/register/`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            }).then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(authSignUpUserSuccess());
                dispatch(push(redirect));
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined' && error.response.status === 400) {
                    // Invalid authentication credentials
                    return error.response.json().then((data) => {

                        var message = "";

                        if (data.hasOwnProperty("username")) {
                            message += data.username[0] + "\n";
                        }
                        if (data.hasOwnProperty("email")) {
                            message += data.email[0] + "\n";
                        }

                        dispatch(authSignUpUserFailure(400, message));
                    });
                } else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
                    // Server side error
                    dispatch(authSignUpUserFailure(500, "A server error occurred while sending your data. We're working to fix this issue."));
                } else {
                    // Most likely connection issues
                    dispatch(authSignUpUserFailure('Connection Error', 'An error occurred while sending your data!'));
                }

                return Promise.resolve();
            })
    }
}

export function authLoginUser(username, password, redirect = '/') {
    return (dispatch) => {
        dispatch(authLoginUserRequest());
        const auth = btoa(`${username}:${password}`);
        return fetch(`${SERVER_URL}/api/v1/accounts/login/`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${auth}`
                }
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(authLoginUserSuccess(response.token, response.user));
                dispatch(push(redirect));
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined' && error.response.status === 401) {
                    // Invalid authentication credentials
                    return error.response.json().then((data) => {
                        dispatch(authLoginUserFailure(401, data.non_field_errors[0]));
                    });
                } else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
                    // Server side error
                    dispatch(authLoginUserFailure(500, 'A server error occurred while sending your data!'));
                } else {
                    // Most likely connection issues
                    dispatch(authLoginUserFailure('Connection Error', 'An error occurred while sending your data!'));
                }

                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}