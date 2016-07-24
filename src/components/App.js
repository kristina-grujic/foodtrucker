import React from 'react';
import Sidebar from './Sidebar';

export default class App extends React.Component {

  render() {
    var { children } = this.props;
    return (
      <div>
        <section>
          { children }
        </section>
        <Sidebar/>
      </div>
    );
  }

}
