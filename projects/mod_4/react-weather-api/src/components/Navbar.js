import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const Navbar = (props) => {
    const { weather } = useContext(WeatherContext);

    return (
        <div className='navbar'>
            <h1>Weather Forecast</h1>
            <p>You have { weather.length } saved weather forecasts for { props.city }</p>
        </div>
    );
};

export default Navbar;