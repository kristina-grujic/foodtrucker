import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import createRoutes from './Routes';

window.React = React;

const routes = createRoutes();

ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>
  , document.getElementById('content')
);
