import React, {Component} from 'react';
import {Link} from 'react-router';
import Menu from './menu';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  componentDidMount(){
      $('#m_btn').on('click', () =>{
        console.log("menu button clicked....");
        $('#m_sidebar').sidebar('toggle');
      });
      
      $(window).resize(function() {
    // Detect if the resized screen is mobile or desktop width
    if($(window).width() > 631) {
        console.log('desktop'); 
        $('#m_sidebar').sidebar('hide');
    }
    else {
       console.log('mobile');
    }
});
      
  }
  
  render() {
    return (
      <div id="header">
        <div id="mainHead">
          <Menu />     
        </div>
         <img id="mainImage" src="images/chairs.jpg" alt="Chairs" />
      </div>
    );
  }
}

export default Header;