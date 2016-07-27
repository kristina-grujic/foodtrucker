import React from 'react';


//Newsletter Envelope Icon

export default class Newsletter extends React.Component {
  constructor(props) {
  	super(props);
  	this.displayName = 'Newsletter Message';
  }
  render() {
    return(
    <div style={{position: 'absolute', bottom: 2, left: 45}}>
      <img src='../../media/newsletter.png' style={{backgroundColor:'white'}}/>
    </div>
    )
  }
}
