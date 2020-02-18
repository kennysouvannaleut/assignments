import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const Navbar = (props) => {
    const { weather } = useContext(WeatherContext);

    return (
        <nav className='navbar'>
            <h1>React Weather App</h1>
            <p>You have { weather.length } saved weather forecasts for { props.weather }</p>
        </nav>
    );
};

export default Navbar;