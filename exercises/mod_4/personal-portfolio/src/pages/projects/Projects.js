import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from '../../images/weatherapp.png';

const Projects = ({ match }) => {

    return (
        <div>
            <ul>
                <li>
                    <Link to={match.url + '/react-project'}>React Project</Link>
                </li>
                    <br /><img src={logo} alt='react-project-logo' width='55%' />
                <li>
                    <br /><Link to={match.url + '/text-based-game-project'}>Text-Based Game Project</Link>
                </li>
                <li>
                    <Link to={match.url + '/axios-api-project'}>Axios API Project</Link>
                </li>
                <li>
                    <Link to={match.url + '/css-flags-project'}>CSS Flags Project</Link>
                </li>

                < br/>
                    <a href='https://www.github.com/kennysouvannaleut/assignments'>Check out my recent Projects...</a>
            </ul>

            <Switch>
                <Route
                    exact
                    path={match.url}
                />
            </Switch>

        </div>
    );
};

export default Projects;