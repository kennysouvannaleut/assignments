import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/weather'>Weather</Link></li>
            <li><Link to='/saved'>Saved</Link></li>
        </ul>
    </header>
);

export default Header;