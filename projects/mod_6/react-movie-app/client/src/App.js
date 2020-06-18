import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from './context/userContext';
import Auth from './components/auth/Auth';
import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import Error from './components/Error';
import ProtectedRoute from './components/ProtectedRoute';
import Movie from './components/pages/movie/Movie';
import Home from './components/pages/home/Home';
import Favorite from './components/pages/favorite/Favorite';

const App = () => {

    const { token, logout } = useContext(UserContext);

    return (
        <div className='App'>
            { token && <Navbar logout={ logout } /> }
            <div style={{ paddingTop: '70px', minHeight: 'calc(100vh - 80px)' }}>
                
                <Switch>
                    <Route
                        exact path='/'
                        render={ () => token ? <Redirect to = '/home' /> : <Auth /> }
                    />

                    <ProtectedRoute
                        path='/home'
                        component={ Home }
                        redirectTo='/'
                        token={ token }
                    />
                    <ProtectedRoute
                        path='/movie/:movieId'
                        component={ Movie }
                        redirectTo='/'
                        token={ token }
                    />
                    <ProtectedRoute
                        path='/search'
                        component={ Main }
                        redirectTo='/'
                        token={ token }
                    />
                    <ProtectedRoute
                        path='/favorites'
                        component={ Favorite }
                        redirectTo='/'
                        token={ token }
                    />
                    <ProtectedRoute
                        path='*'
                        component={ Error }
                        redirectTo='/'
                        token={ token }
                    />
                </Switch>

            </div>
                <Footer />
        </div>
    )
};

export default App;
