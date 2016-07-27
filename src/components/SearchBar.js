import React from 'react';
import EventEmitter from 'events';
var FaBeer = require('react-icons/lib/fa/search');
import moment from 'moment';

export default class SearchBar extends React.Component{

  constructor(props) {
      super(props);
      this.displayName = 'SearchBar';
  }


  render() {
    return (
      <div>
        <SearchBox emittedEvent="search" placeholder="i.e asian"/>
        <SearchBox emittedEvent="date" placeholder='mm/dd/yyyy'/>
      </div>
    );
  }

}

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' }
    this.onChangeText = this.onChangeText.bind(this)
  }

  componentDidMount(){
    EventEmitter.prototype.addListener('searchReset', this.resetSearch.bind(this,''))
  }

  resetSearch(){
    this.setState({query: ''});
    EventEmitter.prototype.emit(this.props.emittedEvent, '')
  }

  onChangeText(event){
    var query = event.target.value
    this.setState({query});
    EventEmitter.prototype.emit(this.props.emittedEvent, query)
  }

  render() {
    return (
      <div style={{backgroundColor:'#fff', borderRadius:20, borderColor: '#999', borderStyle:'solid', borderWidth:'1px', margin:'0 auto', marginBottom:10, width: '80%'}}>
        <input placeholder={this.props.placeholder} style={{backgroundColor:'transparent', border: 'none', width:'85%'}} onChange={this.onChangeText} value={this.state.query}/>
        {this.props.emittedEvent=='search' ? <FaBeer style={{position: 'relative', right:-2, width:13, height:13}}/> : null }
      </div>
    )
  }
}
