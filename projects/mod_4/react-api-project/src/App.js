import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WeatherAdvisory from './pages/weather/WeatherAdvisory';
import WeatherDetails from './pages/weather/WeatherDetails';
import Settings from './pages/weather/Settings';
import { Switch, Route } from 'react-router-dom';
import { APIWeatherContext } from './contexts/APIWeatherContext';

const App = () => (
    <div className = 'App'>
        <Header />
        <APIWeatherContext.Provider>

        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/weather' component={ WeatherAdvisory } />
            <Route path='/weather/:weatherId' component={ WeatherDetails } />
            <Route exact path='/settings' component={ Settings } />
        </Switch>

        </APIWeatherContext.Provider>
        <Footer />
    </div>
);

export default App;