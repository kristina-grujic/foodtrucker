import React, { Component } from 'react';
import SearchBar from './SearchBar'

export default class Header extends Component {
  render() {
    return(
      <div id="appHeader">
        <div id='headerBox'>
          <p id='headerText'>foodtrucker</p>
          <div style={{paddingTop: 20}}>
          	<SearchBar/>
          </div>
        </div>
      </div>
    );
  }
}
