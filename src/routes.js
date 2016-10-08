import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PageLayout from './components/PageLayout';
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={PageLayout}>
    <IndexRoute component={IndexPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
