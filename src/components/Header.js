import React, { Component } from 'react';
import SearchBar from './SearchBar'
import EventEmitter from 'events';

export default class Header extends Component {
  render() {
    return(
      <div id="appHeader">
        <div id='headerBox'>
          <img src="../../media/foodtruckerLOGO.png"
               style={{width:'60%', height:"40%"}}
               onClick={() => {EventEmitter.prototype.emit('searchReset'); return this}}/> { /* when logo is clicked, search will reset */ }
          <div style={{paddingTop:5}}>
          	<SearchBar/>
          </div>
        </div>
      </div>
    );
  }
}
