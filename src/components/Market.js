import React from 'react';
import Vendor from './Vendor';
var Up = require('react-icons/lib/fa/chevron-up');
var Down = require('react-icons/lib/fa/chevron-down');

/* List of markets being rendered. Every market is mapped to an instance of Market class, specified below */
export default class MarketsList extends React.Component {
  constructor(props) {
  	super(props);
  	this.displayName = 'Markets List';
  }

  renderMarkets(){
    const list = this;
    var marketNodes = this.props.markets.map(function(market, i){
      return (
        <Market market={market} day={list.props.day} key={i}/>
      );
    });
    return marketNodes;
  }

  render() {
    return(
      <div>
        { this.renderMarkets() }
      </div>
    );
  }
}


/* In this class vendors are dynamically showed and hidden by clicking on a market */
class Market extends React.Component{
  constructor(props){
    super(props);
    this.state = {vendorsVisible: false}
  }

  showVendors(){
    this.setState({vendorsVisible: !this.state.vendorsVisible})
  }

  renderVendors(){
    if (this.state.vendorsVisible){
      return this.props.market.vendors.map(function(vendor, i){
        return <Vendor vendor={vendor} key={i} listN={i}/>
      })
    }
    return <div/>
  }
  render() {
    if (this.props.market.vendors.size>0 && this.props.market[this.props.day]!='Closed'){
		return (
    	<div id = "market" style={{position:'relative', borderBottomColor:'#fff', borderBottomStyle: 'solid', borderBottomWidth: '1px'}}>
      {
        this.state.vendorsVisible ?
        <Up style={{color:"#aaa", position: 'absolute', top: 20, right: 10, width: 20, height:20}}  onClick={this.showVendors.bind(this)} />
        :
        <Down style={{color:"#aaa", position: 'absolute', top: 20, right: 10, width: 20, height:20}}  onClick={this.showVendors.bind(this)} />
      }
        <img src='../../media/foodtruck_dribble.png' style={{width:80, height:65 }}/>
        <div style={{display: 'inline-block', paddingLeft:20, width: 200}}>
        <h4 >
        	{this.props.market.title}
        </h4>
        <p>{this.props.market[this.props.day]}</p>
        </div>
      	{this.renderVendors()}
      </div>
		);
    }
    return <div/>
	}
}
