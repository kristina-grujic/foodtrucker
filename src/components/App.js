import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';

const App = ({ children }) => (
  <div>
    <section>
      {children || <h1>HELLo</h1>}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
