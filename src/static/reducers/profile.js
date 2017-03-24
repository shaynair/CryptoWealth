import { createReducer } from '../utils';
import { PROFILE_FETCH_FAILURE, PROFILE_FETCH_REQUEST, PROFILE_FETCH_SUCCESS } from '../constants';

const initialState = {
    portfolios: [],
    isFetching: false,
    returns: 0,
    totalEarnings: 0,
    totalValue: 0
};

export default createReducer(initialState, {
    [PROFILE_FETCH_REQUEST]: (state) => {
        return Object.assign({}, state, {
            isFetching: true
        });
    },
    [PROFILE_FETCH_SUCCESS]: (state, payload) => {
        console.log(payload);
        return Object.assign({}, state, {
            portfolios: payload.portfolio,
            isFetching: true,
            returns: payload.returns,
            totalEarnings: payload.total,
            totalValue: payload.value
        });
    },
    [PROFILE_FETCH_FAILURE]: (state) => {
        return Object.assign({}, state, {
            isFetching: false,
        });
    }
});