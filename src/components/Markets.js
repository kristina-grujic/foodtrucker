import React from 'react';
import { EventEmitter } from 'events';
import SearchBar from "./SearchBar";
import Sidebar from './Sidebar';
import Header from './Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchVendors } from '../actions/markets/actions';
import moment from 'moment';
import About from './About';
import Newsletter from './Newsletter';

var geojson = require('../data/markets');

class Markets extends React.Component {
    //Import Map
    constructor(props) {
      super(props);
    }
    componentDidMount () {
      EventEmitter.prototype.addListener('search', this.search.bind(this))
      EventEmitter.prototype.addListener('date', this.mapMarkersToJson.bind(this))

      L.mapbox.accessToken = 'pk.eyJ1IjoibWFyaWF0ZWNobWFuaWFjIiwiYSI6ImNpcWh2dnNjczAwOW1od2t4ajYybzY2b2MifQ.TdIEwB_XXvcKNrKxUBS1_g';
      var map = L.mapbox.map('map', 'mapbox.streets').setView([51.5076134, -0.1570812], 14);
      var styleLayer = L.mapbox.styleLayer('mapbox://styles/mariatechmaniac/ciqhvouef001peanhh22zz2rr').addTo(map);
      this.featureLayer = L.mapbox.featureLayer().addTo(map);
      this.mapMarkersToJson()
    }

    search(query){
      /* here should be added a timeout-like functionality once the backend is separated */
      const component = this
      this.props.searchVendors(query)
      setTimeout(function(){
        component.mapMarkersToJson()
      }, 200);
    }

    mapMarkersToJson(){
      /* this function draws the markers to the map everytime search is made */
      this.featureLayer.on('layeradd', function(e) {
        var marker = e.layer,
        feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));
      });
      this.featureLayer.setGeoJSON(this.generateGeoJSON())
    }
    generateGeoJSON(){
      /*
        This is where we are actually generating actual geojson we're going to use for a map,
        out of markets filtered by the search.
        Marker icon is added in properties, and can easily be changed.
      */
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
            "properties": {
              "icon": {
                "iconUrl": "../../media/stand.png",
                "iconSize": [50, 50],
                "iconAnchor": [25, 25],
                "popupAnchor": [0, -25],
                "className": "dot"
              }
            }
          })
        }
       return this
      })
      return geojson
    }

    render () {
      /* header, about and newsletter, and map are rendered in this component. It appears as the root component of application */
        return (
         <div>
          <Header/>
          <About/>
          <Newsletter/>
      	  <div id='map' style={{width: '100%'}}></div>
      	</div>
        );
    }

};


/*
  Code below this line is used everytime you need to have access to something from redux store or to call an action to change it
  connect is a function with two parameters : first one is specifying what we need from redux store (stateToProps in this case),
  and the second one is specifying the actions we can call to change the redux store. Connect is a wrapper function from react-redux
  package which sends everything specified in its parameters to the component being wrapped as props.
*/

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
