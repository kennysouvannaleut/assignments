import React from 'react';
import { Link } from 'react-router-dom';
import Navtab from './Navtab.js';

const Navbar = props => {
    const { token, signout } = props;

    return (
        <div className='nav'>
            { token && <Link to='/profile'>Profile</Link> }
            <div className='nav-box'>
                <Navtab to='/home' label='Home' />
                <Navtab to='/profile' label='Profile' />
                <Navtab to='/current-user' label='Post' />
            </div>
            <button className='nav-button' onClick={ signout }>Signout</button> 
        </div>
    );
};

export default Navbar;
