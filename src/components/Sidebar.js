import React from 'react';
import { connect } from 'react-redux';

var Twitter = require('react-icons/lib/fa/twitter');
var Instagram = require('react-icons/lib/fa/instagram');

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
    this.setState({vendorsVisible: true})
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
    if (this.props.market.vendors.size>0 && this.props.market[this.props.day]!='Closed'){
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
      const div = <div style={{ margin: 2, display: 'inline-flex', backgroundColor:'#ddd',
                                borderColor:'#999', borderRadius:10, borderWidth: .5, padding:2,
                                paddingLeft:10, paddingRight:10, borderStyle:'solid', fontSize: 12, }}>
                    {tags[i]}
                  </div>
      renderedTags.push(div)
    }
    return renderedTags;
  }
  render(){
    return(
      <div id="vendor" onClick={undefined} style={{padding:10}}>
        <a href={this.props.vendor.Website}>{this.props.vendor.Vendor}</a>
        <div style={{margin:5}}>
          {this.renderTags()}
        </div>
        <div style={{float:'right', margin:'-20px 0px 20px -20px', padding:-10}}>
          <a href={this.props.vendor.Twitter}><Twitter style={{margin:5, width:18, height:18 }}/></a>
          <a href={this.props.vendor.Instagram}><Instagram style={{margin:5, width:18, height:18}}/></a>
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
