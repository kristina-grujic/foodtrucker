import React from 'react';
import { connect } from 'react-redux';
import MarketsList from './Market';

export class Sidebar extends React.Component {
  constructor(props) {
      super(props);
      this.displayName = 'SideBar';
  }
  render() {
    return (
      <div id="sidebar" style={{overflow:'scroll', height:'100%'}}>
        <img src='../../media/tentstripe_sidebar.png' style={{width:'100%', height:20}}/>
        <MarketsList day={this.props.day} markets={this.props.markets}/>
      </div>
      );
  }
};


const stateToProps = (state) => {
  return {
    vendors : state.markets.filtered_vendors,
    markets : state.markets.filtered_markets
  }
}

export default connect(stateToProps, null)(Sidebar)
