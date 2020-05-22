import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/styles.css';
import App from './App.js';

const rootElement = document.getElementById('root')

render(
    <Router>
        <App />
    </Router>,
    rootElement
);
