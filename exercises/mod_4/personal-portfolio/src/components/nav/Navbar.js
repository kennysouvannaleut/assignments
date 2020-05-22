import React from 'react';
import Navtab from './Navtab.js';

const Navbar = () => {
    return(
        <div className='nav'>
            <Navtab to='/about' label='About' />
            <Navtab to='/projects' label='Projects' />
            {/* <Navtab to='/contact' label='Contact' /> */}
        </div>
    );
};

export default Navbar;
