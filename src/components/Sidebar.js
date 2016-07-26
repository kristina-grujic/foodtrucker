import React from 'react';
import { connect } from 'react-redux';

export class Sidebar extends React.Component {
  constructor(props) {
      super(props);
      this.displayName = 'SideBar';
  }
  render() {
    return (
      <div id="sidebar">
        <MarketsList day={this.props.day} markets={this.props.markets}/>
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
    const list = this;
    console.log(this.props.markets)
    var marketNodes = this.props.markets.map(function(market){
      return (
        <Market market={market} day={list.props.day}/>
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
    if (this.props.market.vendors.size>0){
		return (
    	<div id = "market">
      	<h4 className= "MarketName">
      	 {this.props.market.title}
      	</h4>
        <p>{this.props.market[this.props.day]}</p>
      	{this.props.children}
    	</div>
		);
    }
    return <div/>
	}
}


const stateToProps = (state) => {
  return {
    vendors : state.markets.filtered_vendors,
    markets : state.markets.filtered_markets
  }
}

export default connect(stateToProps, null)(Sidebar)
