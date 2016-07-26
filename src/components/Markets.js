import React from 'react';
import { EventEmitter } from 'events';
import SearchBar from "./SearchBar";
import Sidebar from './Sidebar';
import Header from './Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchVendors } from '../actions/markets/actions';
import moment from 'moment';

var geojson = require('../data/markets');

class Markets extends React.Component {
    //Import Map
    constructor(props) {
      super(props);
    }
    componentDidMount () {
      EventEmitter.prototype.addListener('search', this.search.bind(this))

      L.mapbox.accessToken = 'pk.eyJ1IjoibWFyaWF0ZWNobWFuaWFjIiwiYSI6ImNpcWh2dnNjczAwOW1od2t4ajYybzY2b2MifQ.TdIEwB_XXvcKNrKxUBS1_g';
      var map = L.mapbox.map('map', 'mapbox.streets').setView([51.5076134, -0.1570812], 14);
      var styleLayer = L.mapbox.styleLayer('mapbox://styles/mariatechmaniac/ciqhvouef001peanhh22zz2rr').addTo(map);
      this.featureLayer = L.mapbox.featureLayer().addTo(map);
    }

    search(query){
      /* here should be added a timeout-like functionality once the backend is separated */
      const component = this
      this.props.searchVendors(query)
      setTimeout(function(){ component.featureLayer.setGeoJSON(component.generateGeoJSON()) }, 200);

    }
    generateGeoJSON(){
      const geojson = { "type": "FeatureCollection", "features": []}
      const day = this.props.day;
      this.props.markets.map((market) => {
        if (market.vendors.size>0 && market[day]!='Closed') {
          geojson['features'].push({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: market.coordinates
            },
            properties: {}
          })
        }
       return this
      })
      return geojson
    }

    //Import Sidebar, Searchbar Components & Map Layer
    render () {
        return (
         <div>
          <Header/>
      	  <div id='map' style={{width: '100%'}}></div>
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

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchVendors
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Markets)
