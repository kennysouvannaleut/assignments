import React, { useContext } from 'react';
import { UglyThingContext } from '../contexts/UglyThingContext';

const Navbar = () => {
    const { uglyThings } = useContext(UglyThingContext);
    return (
        <div className='navbar'>
            <h1>Ugly List</h1>
            <p>Currently, you have { uglyThings.length } Ugly Things to view!</p>
        </div>
    );
}

export default Navbar;