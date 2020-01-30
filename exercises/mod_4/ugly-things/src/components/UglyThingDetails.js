import React, { useContext } from 'react';
import { UglyThingContext } from '../contexts/UglyThingContext';

const UglyThingDetails = ({ uglyThing }) => {
    const { removeUglyThing } = useContext(UglyThingContext);
    return (
        <li onClick={() => removeUglyThing(uglyThing.index)}>
            <div className='title'>{ uglyThing.title }</div>
            {/* <div className='imgUrl'>{ uglyThing.imgUrl }</div> */}
            <img className='imgUrl' src={ uglyThing.imgUrl } alt='' />
            <div className='description'>{ uglyThing.description }</div>
        </li>
    );
}

export default UglyThingDetails;