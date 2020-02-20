import React from 'react';
import { NavLink } from 'react-router-dom';

const NavTab = (props) => {
    const activeStyle = {
        color: '#B3B322',
        fontWeight: 'bold'
    };

    const navStyle = {
        margin: '10px'
    };

    return (
        <NavLink style={navStyle} activeStyle={activeStyle} to={props.to}>
            {props.label}
        </NavLink>
    );
};

export default NavTab;