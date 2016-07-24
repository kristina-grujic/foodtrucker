import React from 'react';
import SearchBar from "./SearchBar";
import Sidebar from './Sidebar';

//Markets & Vendors Input data
var data = [
  {id: 1,  marketname: "Borough"},                           // to construct in geoJSON (SEE --> http://leafletjs.com/examples/geojson.html)
  {id: 2,  marketname: "Spitafields"}
];

var data_vendors = [
  {id2: 1, vendorname: "Crosstown Doughnuts", venue: "Borough" }//tags: [Doughnuts, Donuts, Sweet, Coffee, American, Comfort Food] }
  //{id2: 2, vendorname: "Blu Top Ice-cream", venue: "Spitafields"}// tags: [Gelato, Ice-cream, Cold, Cookies, Sweet, Ice Cream]}
  //{id2: 3, vendorname: "Fatties Bakery", venue: "Druid"}// tags: [Baked Goods, Cookies, Sweet, American, Comfort Food]}
  //{id2: 4, vendorname: "Dumpling Shack", venue: "Broadway"}// tags: [Asian, Chinese, Taiwaneese, Soup]}
  //{id2: 5, vendorname: "Rock My Bowl", venue: "Druid"}// tags: [Healthy, Vegan, Vegetarian]}
];

class Markets extends React.Component {
    //Import Map
    componentDidMount () {
        L.mapbox.accessToken = 'pk.eyJ1IjoibWFyaWF0ZWNobWFuaWFjIiwiYSI6ImNpcWh2dnNjczAwOW1od2t4ajYybzY2b2MifQ.TdIEwB_XXvcKNrKxUBS1_g';
        var map = L.mapbox.map('map', 'mapbox.streets')
            .setView([51.5076134, -0.1570812], 14);
    }
    //Import Sidebar, Searchbar Components & Map Layer
    render () {
        return (
         <div>
          <SearchBar data={data}/>
      	  <div id='map' style={{width: '100%'}}></div>
      	</div>
        );
    }

};

export default Markets;
