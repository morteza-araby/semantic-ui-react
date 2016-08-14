import React, {Component} from 'react';
import {Link} from 'react-router';
import MenuItems from './menu-items';

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <MenuItems
          id="m_sidebar" 
          className="ui sidebar inverted vertical menu"
          />
    );
  }
}

export default Sidebar;