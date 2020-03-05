import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserProvider';

import './css/styles.css';
import App from './App';

const rootElement = document.getElementById('root');

render(
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>,
    rootElement
);
