import React from 'react';
import { connect } from 'react-redux';

export class Sidebar extends React.Component {
  constructor(props) {
      super(props);
      this.displayName = 'SideBar';
  }
  render() {
    console.log(this.props.vendors)
      return (
      <div id="sidebar">
        {this.props.vendors.map((vendor)=>{
          return <div>{vendor.market_venue},{vendor.Vendor}</div>
        })}
      </div>
      );
  }
};


class MarketsList extends React.Component {
  constructor(props) {
  	super(props);
  	this.displayName = 'Markets List';
  }

  renderMarkets(){
    var marketNodes = this.props.data.map(function(market){
      return (
        <Market marketname={market.marketname} key={market.id}>
          {market.text}
        </Market>
      );
    });
    return marketNodes;
  }

  render() {
    return(
      <div className="marketsList">
        { this.renderMarkets() }
      </div>
    );
  }
}

class Market extends React.Component{
  render() {
		return (
    	<div className = "market">
      	<h2 className= "MarketName">
      	 {this.props.marketname}
      	</h2>
      	{this.props.children}
    	</div>
		);
	}
}


const stateToProps = (state) => {
  return {
    vendors : state.markets.filtered_vendors
  }
}

export default connect(stateToProps, null)(Sidebar)
