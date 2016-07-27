import React from 'react';

/* Class that represents a vendor instance. This class needs to be refactored a little, meaning that inline css should be moved to a separate file*/

export default class Vendor extends React.Component {
  renderTags(){
    /*
       this function renders tags of a vendor. currently, these tags are stored in a string, containing a #,
       so before mapping each tag to a separate component, string is split by #
       mapping starts from index 1, because when splitting a string that starts with a #, first element of result list will be an empty string
    */
    const tags = this.props.vendor.Tags.split('#')
    var renderedTags = []
    for(var i=1; i<tags.length; i++){
      const div = <div style={{ margin: 2, display: 'inline-block', backgroundColor:'#ddd',
                                borderColor:'#999', borderRadius:10, borderWidth: .5, padding:2,
                                paddingLeft:10, paddingRight:10, borderStyle:'solid', fontSize: 12, }} key={i}>
                    {tags[i]}
                  </div>
      renderedTags.push(div)
    }
    return renderedTags;
  }
  render(){
    var color = this.props.listN%2 == 0 ? '#fff' : '#f6f6f6'  /* based on prop sent to the component (index of vendor in a list), the color is chosen */
    return(
      <div id="vendor" onClick={undefined} style={{padding:10, position:'relative', backgroundColor:color}}>
        <div style={{display: 'inline-block'}}>
          <img onError={(e) => e.target.src = '../../media/default_vendor.png'} style={{width:60, height:60, borderRadius:60}} src={this.props.vendor['Image URL']}/> { /* Since filename is the same as vendor's name, I can do this */ }
        </div>
        <div style={{display: 'inline-block', paddingLeft:20, width:150}}>
        <a target="_blank" href={this.props.vendor.Website}>{this.props.vendor.Vendor}</a> { /* Target blank is added to open website in new tab */ }
        <div style={{margin:5, marginBottom: 20, width:200}}>
          {this.renderTags()}
        </div>
        </div>
        <div style={{position:'absolute', bottom:2, right: 2}}>
          { this.props.vendor.Twitter!='' ?
              <a target="_blank" href={this.props.vendor.Twitter}><img src="../../media/twitter_color.png" style={{margin:5, width:18, height:18 }}/></a>
              :
              <a><img src="../../media/twitter_black.png" style={{margin:5, width:18, height:18 }}/></a> /* if there is no twitter linked, black twitter icon will be rendered */
          }
          { this.props.vendor.Instagram!='' ?
            <a target="_blank" href={this.props.vendor.Instagram}><img src="../../media/instagram_color.png" style={{margin:5, width:18, height:18 }}/></a>
            :
            <a><img src="../../media/instagram_black.png" style={{margin:5, width:18, height:18 }}/></a>
          }
        </div>
      </div>
    )
  }
}
