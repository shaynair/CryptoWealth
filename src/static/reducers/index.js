import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import dataReducer from './data';
import questReducer from './quest';
import portfolioReducer from './portfolio';
import profileReducer from './profile';

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    quest: questReducer,
    portfolio: portfolioReducer,
    routing: routerReducer,
    profile: profileReducer
});