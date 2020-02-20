import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './pages/about/About';
// import Resume from './pages/resume/Resume';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import NavBar from './components/NavBar';
import DevIcons from './components/DevIcons';
import Error from './components/Error';
import Footer from './components/Footer';

const App = () => (
  <div className='App'>
    <div className='App-nav'>
      <NavBar />
      <div>
        <DevIcons />
      </div>
    </div>

    <Switch>
      <Redirect exact path='/' to='/about' />
      <Route path='/about' component={About} />
      {/* <Route path='/resume' component={Resume} /> */}
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
      <Route component={Error} />
    </Switch>

    <footer>
        <Footer />
    </footer>
  </div>
);

export default App;
