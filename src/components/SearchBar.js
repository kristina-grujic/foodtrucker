import React from 'react';
import Sidebar from './Sidebar';
import BasicComponent from './BasicComponent';

var GlobalFilters = React.createClass({

    getInitialState: function () {
        return {
            filterText: ''
        };
    },

    render: function () {
        return (
          <div>
        <SearchBar
              filterText={this.state.filterText}/>
      <MarketsList
              markets={this.props.data}
              filterText={this.state.filterText}/>
      </div>
        );
    }

});

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SearchBar';
    }
    render() {
        return (
        <div>
          <h1>SearchBar</h1>
            <form>
              <input type="text" placeholder=" Mexican, Vegan, Lobster ..."></input>
              <input type="date" />
            </form>
            <BasicComponent/>
        </div>
      );
    }
}



export default SearchBar;
