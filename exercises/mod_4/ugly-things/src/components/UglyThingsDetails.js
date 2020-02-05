import React from 'react';
import { UglyThingsContext } from '../contexts/UglyThingsContext';

const UglyThingsDetails = ({ uglyThing }) => (
    <UglyThingsContext.Consumer>
        {(uglyThingsContext) => {
            const { removeUglyThings } = uglyThingsContext;
            return (
                <li onClick={ () => removeUglyThings(uglyThing.id) }>
                    <div className='title'>{ uglyThing.title }</div>
                    <img className='imgUrl' src={ uglyThing.imgUrl } alt='' />
                    <div className='description'>{ uglyThing.description }</div>
                </li>
            )
        }}
    </UglyThingsContext.Consumer>
);

export default UglyThingsDetails;
