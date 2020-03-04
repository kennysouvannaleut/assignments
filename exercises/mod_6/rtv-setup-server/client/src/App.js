import React, { useContext } from 'react';
import { UserContext } from './context/UserProvider';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Public from './components/Public';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    const { token, logout } = useContext(UserContext);

    return (
        <div className='app'>
            <Navbar logout={ logout } token={ token } />

            <Switch>
                <Route 
                    exact path='/'
                    render={ () => token ? <Redirect to='/profile' /> : <Auth /> }
                />
                <ProtectedRoute 
                    path='/profile'
                    component={ Profile }
                    redirectTo={ '/' }
                    token={ token }
                />
                <ProtectedRoute
                    path='/public'
                    component={ Public }
                    redirectTo={ '/' }
                    token={ token }
                />
            </Switch>

        </div>
    )
};

export default App;