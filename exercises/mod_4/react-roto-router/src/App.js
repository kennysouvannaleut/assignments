import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

const styles = {
    navbar: {
    
    },

    footer: {

    },

    main: {

    },

    text: {

    },
};

const App = () => (
    <main>

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
            <p style={ styles.text }>Posted by: Someone </p>
            <p style={ styles.text }>Contact information: <a href='mailto:someone@someone.com'>someone@someone.com</a>.</p>
        </footer>

    </main>
);

export default App;