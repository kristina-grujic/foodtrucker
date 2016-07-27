import React from 'react';
import {ModalContainer, ModalDialog} from '../../react-modal-dialog';

export default class About extends React.Component {
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
      <div style={{position: 'absolute', bottom: 0, left: 5}}>
        <img src='../../media/about.png' style={{backgroundColor:'white', borderRadius:100}} onClick={this.handleClick.bind(this)}/>
        {
          this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose.bind(this)}>
            <ModalDialog topOffset={300} onClose={this.handleClose.bind(this)}>
              <div style={{margin: '0 auto', paddingLeft:20, paddingRight:20, textAlign:'center', width:'500px'}}>
              <p>About foodtrucker</p>
              <p style={{textAlign: 'justify', color:'#aaa', fontFamily: "TakeItEasy"}}>Foodtrucker was born with the ambition to the place where foodies can explore London's exciting street food scene and discover new spots & vendors.</p>
              <div style={{ width: '100%'}}>
              <div style={{ width: '25%', display:'inline-block'}}>
              <img src='../../media/twitter_about.png' style={{width:35, height:30}}/>
              </div>
              <div style={{ width: '25%', display:'inline-block'}}>
              <img src='../../media/facebook_about.png' style={{width:35, height:35, display: 'inline-flex'}}/>
              </div>
              <div style={{ width: '25%', display:'inline-block'}}>
              <img src='../../media/instagram_about.png' style={{width:35, height:35, display: 'inline-flex'}}/>
              </div>
              <div style={{ width: '25%', display:'inline-block'}}>
              <img src='../../media/newsletter_about.png' style={{width:35, height:30, display: 'inline-flex'}}/>
              </div>
              </div>
              </div>
            </ModalDialog>
          </ModalContainer>
        }
      </div>
    )
  }
}
