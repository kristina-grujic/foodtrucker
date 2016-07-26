import React from 'react';
import { connect } from 'react-redux';

export class Sidebar extends React.Component {
  constructor(props) {
      super(props);
      this.displayName = 'SideBar';
  }
  render() {
    return (
      <div id="sidebar" style={{overflow:'scroll', height:'100%'}}>
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
  constructor(props){
    super(props);
    this.state = {vendorsVisible: false}
  }

  showVendors(){
    console.log('vendors')
    this.setState({vendorsVisible: !this.state.vendorsVisible})
  }

  renderVendors(){
    if (this.state.vendorsVisible){
      return this.props.market.vendors.map(function(vendor){
        return <Vendor vendor={vendor}/>
      })
    }
    return <div/>
  }
  render() {
    if (this.props.market.vendors.size>0){
		return (
    	<div id = "market" onClick={this.showVendors.bind(this)}>
      	<h4 className= "MarketName">
      	 {this.props.market.title}
      	</h4>
        <p>{this.props.market[this.props.day]}</p>
      	{this.renderVendors()}
    	</div>
		);
    }
    return <div/>
	}
}

class Vendor extends React.Component {
  renderTags(){
    const tags = this.props.vendor.Tags.split('#')
    var renderedTags = []
    for(var i=1; i<tags.length; i++){
      const div = <div style={{display: 'inline'}}>{tags[i]}</div>
      renderedTags.push(div)
    }
    return renderedTags;
  }
  render(){
    return(
      <div id="vendor">
        {this.props.vendor.Vendor}
        <div>
          {this.renderTags()}
        </div>
      </div>
    )
  }
}


const stateToProps = (state) => {
  return {
    vendors : state.markets.filtered_vendors,
    markets : state.markets.filtered_markets
  }
}

export default connect(stateToProps, null)(Sidebar)
