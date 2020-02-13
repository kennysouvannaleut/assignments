import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const WeatherConditions = (props) => {
    const { id } = useParams();
    const history = useHistory();
    const thisWeather = props.data.find(obj => obj.id === id);

    const handleClick = () => {
        console.log('Submitting...');
        setTimeout(() => {
            history.push('/weather')
        }, 2000)
        history.replace('')
    };

    return (
        <div>
            <h1>Weather Conditions</h1>
            <p>{ thisWeather.name }</p>
            <p>{ thisWeather.city }</p>
            <button onClick={ handleClick }>Go back to all weather forecast</button>
        </div>
    );
};

export default WeatherConditions;