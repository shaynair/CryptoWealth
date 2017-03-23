import { createReducer } from '../utils';
import {
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGOUT_USER,
    AUTH_SIGNUP_USER_REQUEST,
    AUTH_SIGNUP_USER_SUCCESS,
    AUTH_SIGNUP_USER_FAILURE
} from '../constants';


const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

export default createReducer(initialState, {
    [AUTH_SIGNUP_USER_REQUEST]: (state) => {
        return Object.assign({}, state, {
            isAuthenticating: true,
            statusText: null
        });
    },
    [AUTH_SIGNUP_USER_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticating: false,
            statusText: `Authentication Error: ${payload.status} - ${payload.statusText}`
        })
    },
    [AUTH_SIGNUP_USER_SUCCESS]: (state) => {
        return Object.assign({}, state, {
            isAuthenticating: false,
            statusText: `Successfully Signed Up. Please Log In To Your Account.`
        })
    },
    [AUTH_LOGIN_USER_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticating: true,
            statusText: null
        });
    },
    [AUTH_LOGIN_USER_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: true,
            token: payload.token,
            userName: payload.user.username,
            statusText: 'You have been successfully logged in.'
        });
    },
    [AUTH_LOGIN_USER_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: false,
            token: null,
            userName: null,
            statusText: `Authentication Error: ${payload.status} - ${payload.statusText}`
        });
    },
    [AUTH_LOGOUT_USER]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticated: false,
            token: null,
            userName: null,
            statusText: 'You have been successfully logged out.'
        });
    }
});