import React from 'react';
import NavTab from './NavTab';

const NavBar = () => (
    <nav>
        <NavTab to='/about' label='About' />
        <NavTab to='/resume' label='Resume' />
        <NavTab to='/projects' label='Projects' />
        <NavTab to='/contact' label='Contact' />
    </nav>
);

export default NavBar;