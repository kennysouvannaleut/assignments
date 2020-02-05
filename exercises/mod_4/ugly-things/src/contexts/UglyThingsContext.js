import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const UglyThingsContext = createContext();

const UglyThingsContextProvider = (props) => {
    const [uglyThings, setUglyThings] = useState([
        { title: '', imgUrl: '', description: '' }
    ]);
    const addUglyThings = (title, imgUrl, description) => {
        setUglyThings([...uglyThings, {title, imgUrl, description, id: uuid() }])
    }
    const removeUglyThings = (id) => {
        setUglyThings(uglyThings.filter(uglyThing => uglyThing.id !== id))
    }

    return (
        <UglyThingsContext.Provider value={{ uglyThings, addUglyThings, removeUglyThings }}>
            { props.children }
        </UglyThingsContext.Provider>
    );
}

export default UglyThingsContextProvider;
