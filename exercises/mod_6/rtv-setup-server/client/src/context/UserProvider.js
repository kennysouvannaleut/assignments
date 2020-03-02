import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserProvider = (props) => {
    const initialState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        posts: []
    }

    const [userState, setUserState] = useState(initialState);

    const signup = (credentials) => {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
        }

    const login = (credentials) => {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState( {
            user: {},
            token: '',
            posts: []
        })
    }

    return (
        <UserContext.Provider
            value={ {
                ...userState,
                signup,
                login,
                logout
            } }>
            { props.children }
        </UserContext.Provider>
    )
};

export default UserProvider;