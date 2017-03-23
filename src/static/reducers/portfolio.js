import { createReducer } from '../utils';
import { DATA_RECEIVE_PORTFOLIO, DATA_FETCH_PORTFOLIO_REQUEST } from '../constants';

const initialState = {
  data: null,
  isFetching: false
};

export default createReducer(initialState, {
  [DATA_RECEIVE_PORTFOLIO]: (state, payload) => {
    return Object.assign({}, state, {
      data: payload.data,
      isFetching: false
    });
  },
  [DATA_FETCH_PORTFOLIO_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      isFetching: true
    });
  }
});
