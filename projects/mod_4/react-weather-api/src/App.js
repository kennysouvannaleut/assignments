import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Form from './components/Form';
// import Weather from './pages/weather/Weather';
import WeatherContextProvider from './contexts/WeatherContext';
// import Forecast from './components/Forecast/Forecast';

const App = () => (
  <div className='App'>
      <main className='App'>
        <header className='App-Header'> 
            <Header />
        </header>
          <WeatherContextProvider>
            <Navbar />

            {/* <Forecast /> */}
            <Form />
            {/* <Weather /> */}
            <Footer />
          </WeatherContextProvider>
      </main>
  </div>
);

export default App;