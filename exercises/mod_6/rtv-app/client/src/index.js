import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './css/styles.css';
import App from './App';
import UserProvider from './context/UserProvider.js';

const rootElement = document.getElementById('root');

render(
    <Router>
        <UserProvider>
            <App />
        </UserProvider>
    </Router>,
    rootElement
);
