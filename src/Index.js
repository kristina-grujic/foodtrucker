import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Markets from './components/Markets';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={Markets}>
    </Route>
  </Router>), document.getElementById('content')
);
