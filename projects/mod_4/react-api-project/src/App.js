import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WeatherCityList from './pages/weather/WeatherCityList';
import WeatherDetail from './pages/weather/WeatherDetail';
import SavedCities from './pages/SavedCities';
import { Switch, Route, Link } from 'react-router-dom';
import { WeatherContext } from './contexts/WeatherContext';

const App = () => (
    <div className = 'App'>
        <Header />
        <WeatherContext.Provider>
        {/* <nav>
            <Link to='/'>Home</Link>
            <Link to='/weather'>Day Forecast</Link>
            <Link to='/savedCities'>Saved Cities</Link>
        </nav> */}

        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/weather'>
                <WeatherCityList />
            </Route>
            <Route exact path='/weather/:weatherId'>
                <WeatherDetail />
            </Route>
            <Route exact path='/savedCities'>
                <SavedCities />
            </Route>
        </Switch>

        </WeatherContext.Provider>
        <Footer />
    </div>
);

export default App;