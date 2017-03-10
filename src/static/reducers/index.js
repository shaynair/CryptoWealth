import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import dataReducer from './data';
import portfolioReducer from './portfolio';

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    portfolio: portfolioReducer,
    routing: routerReducer
});
