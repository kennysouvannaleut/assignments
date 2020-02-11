import React, { createContext, useState } from 'react';

export const APIWeatherContext = createContext();

const APIWeatherContextProvider = (props) => {
    const [forecast, setForecast] = useState('');
    const [typeOfDay, setTypeOfDay] = useState('');
    const [location, setLocation] = useState('');
    // const [forecast, setForecast] = useState([
    //     { day: '', location: '' }
    // ]);

    setForecast([...forecast, { typeOfDay, location }]);
    setTypeOfDay('');
    setLocation('');

    return (
        <APIWeatherContext.Provider value={{ forecast }}>
            { props.children }
        </APIWeatherContext.Provider>
    );
};

export default APIWeatherContextProvider;