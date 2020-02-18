import React, { useState } from 'react';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Weather from './pages/weather/Weather';
import WeatherContextProvider from './contexts/WeatherContext';

const App = () => {
  const [weather, setWeather] = useState([]);
  const APIKEY = process.env.REACT_APP_API_KEY;

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
      e.preventDefault();
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then(res => res.json())
      .then(data => data)
      if(city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp * 9/5 - 459.67),
        humidity: apiData.main.humidity,
        error:""
      }
      )} else {
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          humidity: '',
          error: "Invalid entry, please provide City & Country"
      }
      )}
  }

  return (
    <div className='App'>
      <header className='App-header'>
          <Header />
      </header>
      <WeatherContextProvider>
        <main>
            {/* <Navbar /> */}
            <Form getWeather={fetchData} />
            <Weather
                city={weather.city}
                country={weather.country}
                description={weather.description}
                temperature={weather.temperature}
                humidity={weather.humidity}
                error={weather.error}
              />
            {console.log(weather.data)}
        </main>
        <footer className='App-footer'>
            <Footer />
        </footer>
      </WeatherContextProvider>
    </div>
  );
}

export default App;