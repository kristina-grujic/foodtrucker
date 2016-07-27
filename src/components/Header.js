import React, { Component } from 'react';
import SearchBar from './SearchBar'
import EventEmitter from 'events';

export default class Header extends Component {
  render() {
    return(
      <div id="appHeader">
        <div id='headerBox'>
          <img src="../../media/foodtruckerLOGO.png" style={{width:'50%', height:"30%"}} onClick={() => {EventEmitter.prototype.emit('searchReset'); return this}}/>
          <div style={{paddingTop: 20}}>
          	<SearchBar/>
          </div>
        </div>
      </div>
    );
  }
}
