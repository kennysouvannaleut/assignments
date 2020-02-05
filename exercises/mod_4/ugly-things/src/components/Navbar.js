import React from 'react';
import { UglyThingsContext } from '../contexts/UglyThingsContext';

const Navbar = () => (
    <UglyThingsContext.Consumer>
        {(uglyThingsContext) => {
            const { uglyThings } = uglyThingsContext;
            return (
                <div className='navbar'>
                    <h1>Ugly Things</h1>
                    <p>Currently, you have { uglyThings.length } ugly things on your list!</p>
                </div>
            )
        }}
    </UglyThingsContext.Consumer>
);

export default Navbar;

