import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';

export default function createRoutes() {
  return (
    <Route component={App} path="/">
    </Route>
  );
}
