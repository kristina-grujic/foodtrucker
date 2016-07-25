import React from 'react';
import { EventEmitter } from 'events';
import SearchBar from "./SearchBar";
import Sidebar from './Sidebar';
import Header from './Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchVendors } from '../actions/markets/actions';

class Markets extends React.Component {
    //Import Map
    componentDidMount () {
      EventEmitter.prototype.addListener('search', this.search.bind(this))
      L.mapbox.accessToken = 'pk.eyJ1IjoibWFyaWF0ZWNobWFuaWFjIiwiYSI6ImNpcWh2dnNjczAwOW1od2t4ajYybzY2b2MifQ.TdIEwB_XXvcKNrKxUBS1_g';
      var map = L.mapbox.map('map', 'mapbox.streets').setView([51.5076134, -0.1570812], 14);
    }

    search(query){
      /* here should be added a timeout-like functionality once the backend is separated */
      this.props.searchVendors(query)
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



const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchVendors
  }, dispatch)
}

export default connect(null, dispatchToProps)(Markets)
