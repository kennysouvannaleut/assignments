import React, { createContext, useState } from 'react';
import uuid from 'uuid/v3';

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
    const [weather, setWeather] = useState([
        { name: '', city: '', country: '', temperature: '', humidity: '', description: '' }
    ]);
    const addCity = (name, city, country, temperature, humidity, description) => {
        setWeather([...weather, { name, city, country, temperature, humidity, description, id: uuid() }])
    };
    const deleteCity = (id) => {
        setWeather(weather.filter(obj => obj.id !== id))
    };
    
    return (
        <WeatherContext.Provider value={{ weather, addCity, deleteCity }}>
            { props.children }
        </WeatherContext.Provider>
    );
};

export default WeatherContextProvider;