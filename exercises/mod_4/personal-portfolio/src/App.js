import React from 'react';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Projects from './pages/projects/Projects';
import Navbar from './components/Navbar';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div className='App'>

    <Route exact path='/' component={ About } />
    <Route exact path='/resume' component={ Resume }/>
    <Route exact path='/projects' component={ Projects } />

  <div className='nav-bar'>
    <div className='nav-sub'>
      <Navbar />
    </div>

    <Link to='/' className='item'>About</Link>
    <Link to='/resume' className='item'>Resume</Link>
    <Link to='/projects' className='item'>Projects</Link>

    </div>
    <footer className='App-footer'>
      Contact Info: 
    </footer>
  </div>
);

export default App;
