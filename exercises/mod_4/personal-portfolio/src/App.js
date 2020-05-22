import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import About from './pages/about/About.js';
import Projects from './pages/projects/Projects.js';
// import Contact from './pages/contact/Contact.js';

import Navbar from './components/nav/Navbar.js';
import DevIcons from './components/DevIcons.js';
import Error from './components/Error.js';
import Footer from './components/footer/Footer.js';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <DevIcons />
        
        <Switch>
            <Redirect exact path='/' to='/about' />
            <Route path='/about' component={ About } />
            <Route path='/projects' component={ Projects } />
            {/* <Route path='/contact' component={ Contact } /> */}
            <Route path='*' component={ Error } />
        </Switch>

        <Footer />
    </div>
  );
};

export default App;
