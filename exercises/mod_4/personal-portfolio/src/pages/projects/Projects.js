import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from '../../images/weatherapp.png';

const Projects = ({ match }) => {
    return (
        <div>
            <ul>
                <li><Link to={ match.url + '/react-project' }> React Weather API </Link></li>
                <img src={ logo } alt='' width='60%' />
                <li><Link to={ match.url + '/text-based-game-project'}> Text-Based Game </Link></li>
                <li><Link to={ match.url + '/axios-api-project'}> Axios API </Link></li>

                <br/><a href='https://www.github.com/kennysouvannaleut/assignments'> Github </a>
                <br/><a href='https://photograph-share.herokuapp.com/'> Check out our Full-Stack App on Heroku </a>
            </ul>

            <Switch> 
                <Route exact path={ match.url } /> 
            </Switch>

        </div>
    );
};

export default Projects;
