import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Weather from './pages/weather/Weather';
import WeatherContextProvider from './contexts/WeatherContext';

const App = () => (
  <div className='App'>
    <WeatherContextProvider>
      <Navbar />
      <Header />
      <Form />
      <Weather />
      <Footer />
    </WeatherContextProvider>
  </div>
);

export default App;