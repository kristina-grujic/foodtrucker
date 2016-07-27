import React from 'react';
import {ModalContainer, ModalDialog} from '../../react-modal-dialog';

//Newsletter Envelope Icon

export default class Newsletter extends React.Component {
  constructor(props) {
  	super(props);
  	this.displayName = 'Newsletter Message';
    this.state = { isShowingModal: false, email: ''}
  }
  handleClick() {
    this.setState({isShowingModal: true})
  }
  handleClose() {
    this.setState({isShowingModal: false, addedEmail: false})
  }

  onChangeText(event){
    this.setState({email: event.target.value})
  }
  render() {
    return(
      <div style={{position: 'absolute', bottom: 2, left: 45}}>
        <img src='../../media/newsletter.png' style={{backgroundColor:'white'}} onClick={this.handleClick.bind(this)}/>
        {
          /*
             by clicking on the icon, state for showing modal is set to true, and modal is rendered;
             for modal, react-modal-dialog is used, but was changed to better match the design
          */
          this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose.bind(this)}>
            <ModalDialog topOffset={300} onClose={this.handleClose.bind(this)}>
              <div style={{margin: '0 auto', textAlign:'center', width:'500px'}}>
                {
                  /*
                     once user enters his email, a thank you dialog appears instead of input field
                     this is done via onSubmit method in the form, which is automatically called when user presses enters
                  */
                  this.state.addedEmail ? <p>Thank you!</p>
                  :
                  <div>
                  <p>Hey there!</p>
                  <p>Wanna be friends?</p>

                  <form onSubmit={() => this.setState({addedEmail: true})}>
                  { /* here email should actually be handled, currently just changes state so content of a component will be changed*/ }
                    <div style={{backgroundColor:'#fff', borderRadius:20, borderColor: '#999', borderStyle:'solid', borderWidth:'1px', margin:'0 auto', marginBottom:10, width: '70%', height:30}}>
                      <input placeholder='mariatechmaniac@yahoo.com' style={{textAlign: 'center',backgroundColor:'transparent', border: 'none', width:'85%', margin:5}} onChange={this.onChangeText.bind(this)} value={this.state.query}/>
                    </div>
                  </form>
                  </div>
                }
              </div>
            </ModalDialog>
          </ModalContainer>
        }
      </div>
    )
  }
}
