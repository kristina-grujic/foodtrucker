import React from 'react';
import EventEmitter from 'events';
var FaBeer = require('react-icons/lib/fa/search');
 
export default class SearchBar extends React.Component{

  constructor(props) {
      super(props);
      this.displayName = 'SearchBar';
  }

  componentDidMount(){
    EventEmitter.prototype.addListener('search', this.search.bind(this))
  }

  search(query){
    console.log(query)
  }

  render() {
    return (
      <div>
        <SearchBox/>
          { /* TODO: add search by date */ 
            /*
            <input type="date" />
            */
          }
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

  onChangeText(event){
    var query = event.target.value
    this.setState({query});
    EventEmitter.prototype.emit('search', query)
  }

  render() {
    return (
      <div style={{backgroundColor:'#fff', borderRadius:20, borderColor: '#999', borderStyle:'solid', borderWidth:.5, margin:'0 auto', width: '80%'}}>
        <input style={{backgroundColor:'transparent', border: 'none'}} onChange={this.onChangeText}/>
        <FaBeer style={{position: 'relative', right:-2, width:13, height:13}}/>
      </div>
    )
  }
}