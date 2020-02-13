import React from 'react';
import WeatherConditions from './WeatherConditions';
import SavedCities from '../SavedCities';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const Weather = (props) => {
    const { path, url } = useRouteMatch();
    const weather = props.data.map(obj => (
        <div key={ obj.id }>
            <h3><Link to={`/weather/${ obj.id }`}>{ obj.name }</Link></h3>
        </div>
    ));

    return (
        <div>
            <h1>Weather Page</h1>
            <ul>
                <li><Link to={`${url}/conditions`}>Weather Conditions</Link></li>
                <li><Link to={`${url}/savedCities`}>Saved Cities</Link></li>
            </ul>

            <Switch>
                <Route path={`${path}/conditions`}>
                    <WeatherConditions />
                </Route>
                <Route path={`${path}/savedCities`}>
                    <SavedCities />
                </Route>
            </Switch>
            { weather }

        </div>
    );
};

export default Weather;