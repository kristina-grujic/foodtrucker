import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SearchBar';
    }
    render() {
        return (
        <div className = "Sidebar">
          <h1>This is the sidebar</h1>
          <MarketsList data={this.props.data} />
        </div>
        );
    }
};


class MarketsList extends React.Component {
  constructor(props) {
  	super(props);
  	this.displayName = 'Markets List';
  }
  render() {
  	var marketNodes = this.props.data.map(function(market){
    return (
      <Market marketname={market.marketname} key={market.id}>
        {market.text}
      </Market>
    );
  });
  return(
  <div className="marketsList">
  {marketNodes}
  </div>
  );
};
};

var Market = React.createClass({
	render: function() {
		return (
		<div className = "market">
		<h2 className= "MarketName">
		{this.props.marketname}
		</h2>
		{this.props.children}
		</div>
		);
	}
})

export default Sidebar;
