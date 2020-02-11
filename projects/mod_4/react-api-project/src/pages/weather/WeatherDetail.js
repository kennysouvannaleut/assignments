import React from 'react';
import { useParams } from 'react-router-dom';
import weatherData from './weatherData';

const WeatherDetail = (props) => {
    const { weatherId } = useParams();
    const thisWeather = weatherData.find(weather => weather._id === weatherId);

    return (
        <div>
            <h1>Weather Detail Page</h1>
            <h3>{ thisWeather.name }</h3>
            <p>{ thisWeather.main }</p>
        </div>
    );
};

export default WeatherDetail;