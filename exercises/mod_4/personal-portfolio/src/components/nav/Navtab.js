import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = { color: '#b3b322', fontWeight: 'bold' };

const Navtab = props => {
    const { to, label } = props;

    return (
        <NavLink
            activeStyle={ activeStyle }
            to={ to }
        >
            { label }
        </NavLink>
    );
};

export default Navtab;
