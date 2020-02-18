import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

import { Switch, Link } from 'react-router-dom';

const App = () => (
  <div className='App'>
    <Navbar />

    <Switch>
        <Link path='/'></Link>
        <Header />
    </Switch>
    
    <Header />
    <footer className='App-footer'>
        <Footer />
    </footer>




  </div>
);

export default App;