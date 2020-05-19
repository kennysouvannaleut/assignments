import React, { useContext } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import UserContext from './context/userContext.js';

import Navbar from './components/nav/Navbar.js';
import Auth from './components/auth/Auth.js';
import Error from './components/Error.js';
import ProtectedRoute from './components/ProtectedRoute.js';

import Home from './pages/home/Home.js';
import Profile from './pages/profile/Profile.js';
import CurrentPost from './pages/currentPost/CurrentPost.js';
import PostDetail from './pages/postDetail/PostDetail.js';
import UserDetail from './pages/userDetail/UserDetail.js';

const App = () => {
    const userContext = useContext(UserContext);
    const { token, signout } = userContext;

    return (
        <div className='App'>
            { token && <Navbar signout={ signout } /> }

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
                    path='/current-user'
                    component={ CurrentPost }
                    redirectTo={ '/' }
                    token={ token }
                />
                <ProtectedRoute
                    path='/home'
                    component={ Home }
                    redirectTo={ '/' }
                    token={ token }
                />
                <ProtectedRoute
                    path='/:issueId/details'
                    component={ PostDetail }
                    redirectTo={ '/' }
                    token={ token }
                />
                <ProtectedRoute
                    path='/user/:username'
                    component={ UserDetail }
                    redirectTo={ '/' }
                    token={ token }
                />
                <ProtectedRoute
                    exact path='*'
                    component={ Error }
                    redirectTo={ '/' }
                    token={ token }
                />
            </Switch>

        </div>
    );
};

export default App;
