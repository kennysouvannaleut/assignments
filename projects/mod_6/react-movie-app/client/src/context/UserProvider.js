import React, { useState } from 'react';
import UserContext from './userContext';
import axios from 'axios';

export default function UserProvider({ children }) {
    const initialState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        errMsg: ''
    };

    const [userState, setUserState] = useState(initialState);

    const register = credentials => {
        axios.post('api/users/register', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
                setUserState(prevUserState => ({
                    ...prevUserState,
                    success: true,
                    user,
                    token
                }));
            })
            .catch(err => {
                if (err.response) {
                    handleAuthErr(err.response.data.errMsg);
                    console.error(err); 
            }
        });
    };

    const login = credentials => {
        axios.post('api/users/login', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
                setUserState(prevUserState => ({
                    ...prevUserState,
                    success: true,
                    user,
                    token
                }));
            })
            .catch(err => {
                if (err.response) {
                handleAuthErr(err.response.data.errMsg);
                console.error(err); 
            }
        });
    };

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: '',
            errMsg: ''
        })
        alert("You've logged out successfully.");
    };

    const handleAuthErr = errMsg => {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        })
    )};

    const resetAuthErr = () => {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        })
    )};
    
    return (
        <UserContext.Provider
            value={{
                ...userState,
                register,
                login,
                logout,
                resetAuthErr
            }} 
                >
                { children }
        </UserContext.Provider>
    );
};
