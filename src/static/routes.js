import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import { HomeView, LoginView, ProtectedView, QuestionnaireView, NotFoundView, PortfolioView , ProfileView, AnalyticsView } from './containers';
import requireAuthentication from './utils/requireAuthentication';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={ requireAuthentication(ProfileView, HomeView)} />
    <Route path="login" component={LoginView} /> />
    <Route path="questionnaire" component={QuestionnaireView} />
    <Route path="portfolio" component={PortfolioView} />
    <Route path="profile" component={requireAuthentication(ProfileView)} />
    <Route path="analytics" component={requireAuthentication(AnalyticsView, HomeView)} />
    <Route path="*" component={NotFoundView} />
  </Route>
);
