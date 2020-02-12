import React from 'react';
import weatherData from './weatherData';
import WeatherDetails from './WeatherDetails';
import Settings from './Settings';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

const WeatherAdvisory = () => {
    const { path, url } = useRouteMatch();
    const weather = weatherData.map(obj => (
        <div key={ obj.id }>
            <h3>
                <Link to={`/weather/${ obj.id }`}>{ obj.name }</Link>
            </h3>
            <hr />
        </div>
    ))

    return (
        <div>
            <h1>Weather Advisory Page</h1>
            <ul>
                <li><Link to={`${url}/details`}>Weather Details</Link></li>
                <li><Link to={`${url}/settings`}>Weather Settings</Link></li>
            </ul>

            <Switch>
                <Route path={`${path}/details`}>
                    <WeatherDetails />
                </Route>
                <Route path={`${path}/settings`}>
                    <Settings />
                </Route>
            </Switch>
            { weather }
        </div>
    );
};

export default WeatherAdvisory;