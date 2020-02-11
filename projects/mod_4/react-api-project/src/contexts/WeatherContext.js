import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
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
        <WeatherContext.Provider value={{ forecast }}>
            { props.children }
        </WeatherContext.Provider>
    );
};

export default WeatherContextProvider;