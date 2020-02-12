import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import weatherData from './weatherData';

const WeatherDetails = () => {
    const { weatherId } = useParams();
    const history = useHistory();
    const thisWeather = weatherData.find(obj => obj.id === weatherId);

    const handleClick = () => {
        console.log('Submitting...')
        setTimeout(() => {
            history.push('/weather')
        }, 2000)
        history.replace('')
    }

    return (
        <div>
            <h1>Weather Details Page</h1>
            <h3>{ thisWeather.name }</h3>
            <p>{ thisWeather.main }</p>
            <button onClick={ handleClick }>Go back to all weather forecast</button>
        </div>
    );
};

export default WeatherDetails;