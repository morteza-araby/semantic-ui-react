import React from 'react';
import { Component } from 'react';
 //import $ from 'jquery';

//import '../../node_modules/semantic-ui/dist/components/popup.css';
//$.fn.popup = require('semantic-ui-popup');

export default class Popup extends Component {
  constructor(props, context){
    super(props, context);
    
    this.state = {     
      value: 0
    }
  }


  componentDidMount(){
    //$('.ui.dropdown').dropdown();
    $('.example').popup({on: 'click', lastResort: true})
  }

  render(){
    return (
           <div className="ui icon button example" data-content="Awesome popup">
               <i className="add icon"></i>
           </div>
      );
  }





  //render() {
  //  return (
  //    <div className="ui dropdown">
  //        <div className="text">File</div>
  //        <i className="dropdown icon" />
  //        <div className="menu">
  //        <div className="item">New</div>
  //        <div className="item">
  //        <span className="description">ctrl + o</span>
  //  Open...
  //  </div>
  //  <div className="item">
  //  <span className="description">ctrl + s</span>
  //  Save as...
  //  </div>
  //  <div className="item">
  //  <span className="description">ctrl + r</span>
  //  Rename
  //  </div>
  //  <div className="item">Make a copy</div>
  //  <div className="item">
  //  <i className="folder icon" />
  //  Move to folder
  //  </div>
  //  <div className="item">
  //  <i className="trash icon" />
  //  Move to trash
  //  </div>
  //  <div className="divider"></div>
  //  <div className="item">Download As...</div>
  //  <div className="item">
  //  <i className="dropdown icon" />
  //  Publish To Web
  //  <div className="menu">
  //  <div className="item">Google Docs</div>
  //  <div className="item">Google Drive</div>
  //  <div className="item">Dropbox</div>
  //  <div className="item">Adobe Creative Cloud</div>
  //  <div className="item">Private FTP</div>
  //  <div className="item">Another Service...</div>
  //  </div>
  //  </div>
  //  <div className="item">E-mail Collaborators</div>
  //  </div>
  //</div>
  //  );
  //}
}
