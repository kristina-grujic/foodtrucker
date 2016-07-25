import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMarkets, fetchVendors } from '../actions/markets/actions';

export class App extends React.Component {
  constructor(props){
    super(props)
    props.fetchVendors();
    props.fetchMarkets();
  }

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


const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchVendors,
    fetchMarkets
  }, dispatch)
}

export default connect(null, dispatchToProps)(App)
