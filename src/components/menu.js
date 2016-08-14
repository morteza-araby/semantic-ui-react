import React, {Component} from 'react';
import {Link} from 'react-router';
import MenuItems from './menu-items';

class Menu extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <MenuItems
                    id="menu" 
                    className="ui pointing menu inverted fluid four item" 
                    />
                

                <button id="m_btn" className="ui labeled icon button black">
                    <i className="icon list layout"></i>
                    MENU
                </button>
                {/*Header icon for desktop */}
                <div className="ui center aligned icon header inverted huge">
                    <i className="circular users inverted icon"></i>
                    Friends
                </div>

                {/*Header icon for mobile -- Css dicides when to show */}
                <h2 className="ui header inverted">
                    <i className="circular users icon inverted"></i>
                    <div className="content">
                        Friends
                    </div>
                </h2>
            </div>
        );
    }
}

export default Menu;