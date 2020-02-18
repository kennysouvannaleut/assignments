import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <header>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/project'>Project</Link></li>
        </ul>
    </header>
);

export default Home;