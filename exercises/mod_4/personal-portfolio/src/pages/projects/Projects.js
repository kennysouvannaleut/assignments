import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Projects = ({ match }) => {

    return (
        <div>
            <ul>
                <li>
                    <Link to={match.url + '/react_project'}>React Project</Link>
                </li>
                <li>
                    <Link to={match.url + '/game_project'}>Game Project</Link>
                </li>
                <li>
                    <Link to={match.url + '/api_project'}>API Project</Link>
                </li>
                <li>
                    <Link to={match.url + '/css_project'}>CSS Project</Link>
                </li>
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