import React, { useContext } from 'react';
import { UglyThingContext } from '../contexts/UglyThingContext';
import UglyThingDetails from './UglyThingDetails';

const UglyThingList = () => {
    const { uglyThings } = useContext(UglyThingContext);
    return uglyThings.length ? (
        <div className='uglythings-list'>
            <ul>
                { uglyThings.map(uglyThing => { 
                    return ( <UglyThingDetails uglyThing={ uglyThing } key={ uglyThing.index }></UglyThingDetails> )
                })}
            </ul>
        </div>
    ) : (
        <div className='empty'> Oppps... No ugly things to look at today! :(</div>
    )
}

export default UglyThingList;