import React, { createContext, useState } from 'react';

export const ListContext = createContext();

const ListContextProvider = (props) => {
    const [lists, setLists] = useState([
        {title: 'YO', id: 1},
        {title: 'HUH', id: 2},
        {title: 'WHAT', id: 3}
    ]);
    return (  
        <ListContext.Provider value={{ lists }}>
            { props.children }
        </ListContext.Provider>
    );
}
 
export default ListContextProvider;