import React from 'react';
import Thumbnail from '../../components/Thumbnail';

const Projects = () => (
    <div>
        <h1>My Projects</h1>
        <Thumbnail 
            link='/weatherapp'
            image='/'
            title='Weather App'
            category='React Weather App'
        />
    </div>
);

export default Projects;   