import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Forecast from './pages/forecast/Forecast';
import { APIWeatherContext } from './contexts/APIWeatherContext';
import { Switch, Route } from 'react-router-dom';

const App = () => (
    <div className='App'>
        <APIWeatherContext.Provider>
            <Header />
            <Footer />

        <Switch>
            <Route exact path='/' component={ Home } />
            {/* <Route exact path='/forecast' component={ Forecast } /> */}
        </Switch>

        </APIWeatherContext.Provider>
    </div>
);

export default App;