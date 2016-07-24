import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Markets from './components/Markets';

export default function createRoutes() {
  return (
    <Route component={App} path="/">
      <IndexRoute component={Markets} />
    </Route>
  );
}
