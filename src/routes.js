import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PageLayout from './components/PageLayout';
import IndexPage from './components/IndexPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={PageLayout}>
    <IndexRoute component={IndexPage} />
    <Route path="/projects" component={ProjectsPage} />
    <Route path="/projects/:slug" component={ProjectDetailsPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
