import React from 'react';
import Thumbnail from '../../components/Thumbnail';

const Projects = () => (
    <div>
        <h1>My Projects</h1>
        <img src='images/weatherapp.png' alt='weather-api' />
        <Thumbnail 
            link='images/weatherapp.png'
            title='Weather App'
            category='React Weather App'
        />
    </div>
);

export default Projects;   