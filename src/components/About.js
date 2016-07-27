import React from 'react';

export default class About extends React.Component {
//SVG+Rectangle On Click open Message
render(){
  return(
<div style={{position: 'absolute', bottom: 0, left: 5}}>
  <img src='../../media/about.png' style={{backgroundColor:'white', borderRadius:100}}/>
</div>
);
}
}
