import React, { useContext } from 'react';
import { UserContext } from './context/UserProvider';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Public from './components/Public';

const App = () => {
    const { token, logout } = useContext(UserContext);

    return (
        <div className='app'>
            <Navbar logout={ logout } />

            <Switch>
                <Route 
                    exact path='/'
                    render={ () => token ? <Redirect to='/profile' /> 
                    : <Auth /> }
                />
                <Route 
                    path='/profile'
                    render={ () => <Profile /> }
                />
                <Route
                    path='/public'
                    render={ () => <Public /> }
                />
            </Switch>

        </div>
    )
};

export default App;