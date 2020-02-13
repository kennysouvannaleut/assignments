import React, { useState, useEffect } from 'react';
import axios from 'axios';

// let KEY='b389f068ef3425ee9bec50d5a6d6712d';
// const URL='https://api.openweathermap.org/data/2.5/weather?q=Salt Lake City&units=metric&apikey={KEY}';
// https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&apikey="+key

const WeatherForecast = () => {
    const [data, setData] = useState({});
    const [id, setId] = useState('');

    useEffect(() => {
        axios
            .get('https://api.openweathermap.org/data/2.5/weather?q=Salt+Lake+City&units=metric&apikey=b389f068ef3425ee9bec50d5a6d6712d')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id]);

    return (
        <div>
            <input type='text' value={ id } onChange={ e => setId(e.target.value) } />
            <div>{ data.name }</div>
        </div>
    );
}

export default WeatherForecast;


  