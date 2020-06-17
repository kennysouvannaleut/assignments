import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import App from './App';
import './index.css';
import './css/styles.css';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
        <UserProvider>
            <App />
        </UserProvider>
    </Router>,
  document.getElementById('root')
);
