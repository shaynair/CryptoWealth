import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import { LoginView, ProtectedView, NotFoundView, PortfolioView } from './containers';
import requireAuthentication from './utils/requireAuthentication';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={PortfolioView} />
        <Route path="login" component={LoginView} />
        <Route path="protected" component={requireAuthentication(ProtectedView)} />
        <Route path="*" component={NotFoundView} />
    </Route>
);
