import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMarkets, fetchVendors } from '../actions/markets/actions';
import { EventEmitter } from 'events';

import Markets from './Markets';

const enumDays = {
  0 : 'Sunday',
  1 : 'Monday',
  2 : 'Tuesday',
  3 : 'Wednesday',
  4 : 'Thursday',
  5 : 'Friday',
  6 : 'Saturday'
}

export class App extends React.Component {
  constructor(props){
    super(props)
    props.fetchVendors();
    props.fetchMarkets();
    this.state = { day: enumDays[(new Date()).getDay()] }
  }

  componentDidMount(){
    EventEmitter.prototype.addListener('date', this.dateToDay.bind(this))
  }

  dateToDay(date){
    var formattedDate = new Date(date);
    const day = enumDays[formattedDate.getDay()]
    if (day!= undefined) this.setState({day: day})
  }

  render() {
    var { children } = this.props;
    return (
      <div>
        <section>
          <Markets day={this.state.day}/>
        </section>
        <Sidebar day={this.state.day}/>
      </div>
    );
  }

}


const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchVendors,
    fetchMarkets
  }, dispatch)
}

export default connect(null, dispatchToProps)(App)
