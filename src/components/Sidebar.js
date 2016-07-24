import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
      super(props);
      this.displayName = 'SideBar';
  }
  render() {
      return (
      <div id="sidebar">
        <h1>This is the sidebar</h1>
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
