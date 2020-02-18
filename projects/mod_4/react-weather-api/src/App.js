import React, {useEffect, useState } from 'react';
import Form from './components/Form';
import Weather from './components/Weather/Weather';
import WeatherContextProvider from './contexts/WeatherContext';
import axios from 'axios';

const App = () => {
  const [weather, setWeather] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async function(e) {
      e.preventDefault();
      const apiData = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        setWeather({ data: apiData })
        fetchData();
      };
    })
      return (
        <div className='App'>
          <WeatherContextProvider>
            <h3>React Weather App</h3>
            <Form getWeather={ weather } />
          </WeatherContextProvider>
        </div>
    );
};

export default App;