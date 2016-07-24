import React from 'react';

export default class BasicComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            markets : []
        };

        this.addMarket = this.addMarket.bind(this);
    }

    componentDidMount () {
        console.log('get data from the database here');
        this.setState({
            markets: ['hello', 'ciao']
        });
    }

    addMarket (marketName) {
        this.setState({
            markets: [marketName, ...this.state.markets]
        });
    }

    render () {
        return (
        <div>
          <h1> Put html code here </h1>
          <p> other html code </p>
          {this.state.markets.map((el)=> {
            return <h5 key={el}> {el} </h5>;
        })}
          <button onClick={()=> {
            this.addMarket('market');
        }}> Click me to add new market </button>
        </div>
      );
    }
}
