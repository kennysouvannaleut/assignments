import React from 'react';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Projects from './pages/projects/Projects';

import { Route, Link } from 'react-router-dom';

const App = () => (
  <div className='App'>

    <Route exact path='/' component={ About } />
    <Route exact path='/resume' component={ Resume }/>
    <Route exact path='/projects' component={ Projects } />

  <div className='nav-bar'>
    <img src='' alt='' />
      <div className='nav-sub'>

        <Link to='/' className='item'>About</Link>
        <Link to='/resume' className='item'>Resume</Link>
        <Link to='/projects' className='item'>Projects</Link>

      </div>
    </div>
  </div>
);

export default App;
