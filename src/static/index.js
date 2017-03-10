import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root/Root';
import configureStore from './store/configureStore';
import { authLoginUserSuccess } from './actions/auth';

import * as questActions from './actions/questionnaire'

const initialState = {};
const target = document.getElementById('root');

const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const node = (
    <Root store={store} history={history}/>
);

const token = sessionStorage.getItem('token');
let user = {};
try {
    user = JSON.parse(sessionStorage.getItem('user'));
} catch (e) {
    // Failed to parse
}

if (token !== null) {
    store.dispatch(authLoginUserSuccess(token, user));
}

// store.dispatch(questActions.updateRiskLevel(10));
// store.dispatch(questActions.addInvestment(1000));


ReactDOM.render(node, target);
