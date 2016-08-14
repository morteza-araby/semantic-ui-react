import React, {Component} from 'react';
import {Link} from 'react-router';

const MenuItems = (props) => {
    return (
        <div id={props.id} className={props.className}>
            <Link className="item" to={'/'}>
                <i className="home icon"></i>
                Home
            </Link>
            <Link className="item" to={'/contact'}>
                <i className="mail icon"></i>
                Messages
            </Link>
            <a className="item">
                <i className="user icon"></i>
                Friends
            </a>
            <a className="item">
                <i className="archive icon"></i>
                Portfolio
            </a>
        </div>
    );
}

export default MenuItems;