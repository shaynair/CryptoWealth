import { createReducer } from '../utils';
import { PROFILE_FETCH_FAILURE, PROFILE_FETCH_REQUEST, PROFILE_FETCH_SUCCESS } from '../constants';

const initialState = {
    portfolios: null,
    isFetching: false,
    returns: 0,
    total: 0
};

export default createReducer(initialState, {
    [PROFILE_FETCH_REQUEST]: (state) => {
        return Object.assign({}, state, {
            isFetching: true
        });
    },
    [PROFILE_FETCH_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            portfolios: payload.portfolios,
            isFetching: true,
            returns: payload.returns,
            total: payload.total
        });
    },
    [PROFILE_FETCH_FAILURE]: (state) => {
        return Object.assign({}, state, {
            isFetching: false,
        });
    }
});