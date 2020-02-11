import React from 'react';
import weatherData from './weatherData';
import { Link } from 'react-router-dom';

const WeatherCityList = () => {
    const weathers = weatherData.map(weather => (
        <h3 key={ weather._id }>
            <Link to={`/weather/${ weather._id }`}>{ weather.name }</Link>
        </h3>
    ))
    return (
        <div>
            <h1>Weather City List Page</h1>
            { weathers }
        </div>
    );
};

export default WeatherCityList;