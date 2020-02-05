import React from 'react';
import UglyThingsDetails from './UglyThingsDetails';
import { UglyThingsContext } from '../contexts/UglyThingsContext';

const UglyThingsList = () => (
    <UglyThingsContext.Consumer>
        {(uglyThingsContext) => {
            const { uglyThings } = uglyThingsContext;
            return uglyThings.length ? (
                <div className='uglythings-list'>
                    <ul>
                        {uglyThings.map(uglyThing => { 
                            return ( 
                            <UglyThingsDetails 
                                uglyThing={ uglyThing } key={ uglyThing.id }>
                            </UglyThingsDetails> 
                            )
                        })}
                    </ul>
                </div>
            ):(
            <div style={ emptyListStyle }> No more ugly things to look at today! :(</div>
            )
        }}
    </UglyThingsContext.Consumer>
);

const emptyListStyle = {
    margin: 20,
    textAlign: 'center'
};

export default UglyThingsList;