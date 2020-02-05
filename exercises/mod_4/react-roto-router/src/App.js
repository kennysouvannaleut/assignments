import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

const App = () => (
    <main style={ styles.main }>
        <nav style={ styles.navbar }>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
        </nav>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/services'>
                <Services />
            </Route>
        </Switch>
        <footer style={ styles.footer }> 
            <p>Posted by: Someone </p>
            <p>Contact information: <a href='mailto:someone@someone.com'>someone@someone.com</a>.</p>
        </footer>
    </main>
);

const styles = {
    navbar: {
        padding: 0,
        margin: '1rem',
        maxWidth: '60rem',
        textAlign: 'center',
    },
    footer: {
        fontSize: 14,
    },
    main: {
        maxWidth: 700,
        fontFamily: 'sans-serif',
        fontSize: 15,
    },  
};

export default App;