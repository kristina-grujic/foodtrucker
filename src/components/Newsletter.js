import React from 'react';
import {ModalContainer, ModalDialog} from '../../react-modal-dialog';

//Newsletter Envelope Icon

export default class Newsletter extends React.Component {
  constructor(props) {
  	super(props);
  	this.displayName = 'Newsletter Message';
    this.state = { isShowingModal: false}
  }
  handleClick() {
    console.log(this)
    this.setState({isShowingModal: true})
  }
  handleClose() {
    this.setState({isShowingModal: false})
  }

  render() {
    return(
      <div style={{position: 'absolute', bottom: 2, left: 45}}>
        <img src='../../media/newsletter.png' style={{backgroundColor:'white'}} onClick={this.handleClick.bind(this)}/>
        {
          this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose.bind(this)}>
            <ModalDialog topOffset={300} onClose={this.handleClose.bind(this)}>
              <div style={{margin: '0 auto', textAlign:'center', width:'500px'}}>
              <p>Hey there!</p>
              <p>Wanna be friends?</p>
              <div style={{backgroundColor:'#fff', borderRadius:20, borderColor: '#999', borderStyle:'solid', borderWidth:'1px', margin:'0 auto', marginBottom:10, width: '70%', height:30}}>
                <input placeholder='mariatechmaniac@yahoo.com' style={{textAlign: 'center',backgroundColor:'transparent', border: 'none', width:'85%', margin:5}} onChange={this.onChangeText} value={this.state.query}/>
                {this.props.emittedEvent=='search' ? <FaBeer style={{position: 'relative', right:-2, width:13, height:13}}/> : null }
              </div>
              </div>
            </ModalDialog>
          </ModalContainer>
        }
      </div>
    )
  }
}
