import React , { createContext, useState } from 'react';
import uuid from 'uuid/v1'

export const UglyThingContext = createContext();

const UglyThingContextProvider = (props) => {
    const [uglyThings, setUglyThings] = useState([
        { title: '', imgUrl: '', description: '' }
    ]);
    const addUglyThing = (title, imgUrl, description) => {
        setUglyThings([...uglyThings, {title, imgUrl, description, index: uuid() }])
    }
    const removeUglyThing = (index) => {
        setUglyThings(uglyThings.filter(uglyThing => uglyThing.index !== index))
    }
    return (
        <UglyThingContext.Provider value={{ uglyThings, addUglyThing, removeUglyThing }}>
            { props.children }
        </UglyThingContext.Provider>
    );
}

export default UglyThingContextProvider;