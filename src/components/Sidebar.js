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
        <img src='../../media/tentstripe_sidebar.png' style={{width:'100%', height:20}}/>
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
    var marketNodes = this.props.markets.map(function(market){
      return (
        <Market market={market} day={list.props.day}/>
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
        <img src='../../media/foodtruck_dribble.png' style={{width:80, height:65 }}/>
        <div style={{display: 'inline-block', paddingLeft:20}}>
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

class Vendor extends React.Component {
  renderTags(){
    const tags = this.props.vendor.Tags.split('#')
    var renderedTags = []
    for(var i=1; i<tags.length; i++){
      const div = <a style={{ margin: 2,  backgroundColor:'#ddd',
                                borderColor:'#999', borderRadius:10, borderWidth: .5, padding:2,
                                paddingLeft:10, paddingRight:10, borderStyle:'solid', fontSize: 12, }}>
                    {tags[i]}
                  </a>
      renderedTags.push(div)
    }
    return renderedTags;
  }
  render(){
    return(
      <div id="vendor" onClick={undefined} style={{padding:10, position:'relative'}}>
        <div style={{display: 'inline-block'}}>
          <img style={{width:60, height:60, borderRadius:60}} src={'../../media/thumbnails/'+this.props.vendor.Vendor+'.png'}/> { /* Since filename is the same as vendor's name, I can do this */ }
        </div>
        <div style={{display: 'inline-block', paddingLeft:20, width:150}}>
        <a target="_blank" href={this.props.vendor.Website}>{this.props.vendor.Vendor}</a> { /* Target blank is added to open website in new tab */ }
        <div style={{margin:5, width:200}}>
          {this.renderTags()}
        </div>
        </div>
        <div style={{position:'absolute', bottom:0}}>
          { this.props.vendor.Twitter!='' ?
              <a target="_blank" href={this.props.vendor.Twitter}><img src="../../media/twitter_color.png" style={{margin:5, width:18, height:18 }}/></a>
              :
              <a><img src="../../media/twitter_black.png" style={{margin:5, width:18, height:18 }}/></a> /* if there is no twitter linked, black twitter icon will be rendered */
          }
          { this.props.vendor.Instagram!='' ?
            <a target="_blank" href={this.props.vendor.Instagram}><img src="../../media/instagram_color.png" style={{margin:5, width:18, height:18 }}/></a>
            :
            <a><img src="../../media/instagram_black.png" style={{margin:5, width:18, height:18 }}/></a>
          }
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
