import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`
    return config;
});

const handleErr = err => console.log(err.response.data.errMsg);

const UserProvider = (props) => {
    const initialState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        posts: [],
        errMsg: ''
    };
    const [userState, setUserState] = useState(initialState);

    const getAllPosts = () => {
        axios.get('/public')
            .then(res => {
                setUserState({
                    posts: res.data
                })
            })
            .catch(handleErr)
    }

    const signup = (credentials) => {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token,
                    success: true
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    };

    const login = (credentials) => {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getUserPosts()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token,
                    success: true
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    };

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: '',
            posts: []
        })
    };

    const handleAuthErr = (errMsg) => {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    };

    const resetAuthErr = () => {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    };

    const getUserPosts = () => {
        userAxios.get('/api/post/user')
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: res.data     
                }))  
            })
            .catch(handleErr)
    };

    const addPost = (newPost) => {
        userAxios.post('/api/post', newPost)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: [
                        ...prevState.posts, 
                        res.data
                    ]
                }))
            })
            .catch(handleErr)
    };

    const removePost = (postID) => {
        userAxios.delete(`/api/${postID}`)
            .then(res => {
                setUserState(prevState => prevState.filter(post => post._id !== postID))
            })
            .catch(handleErr)
    };

    const editPost = (update, postID) => {
        userAxios.put(`/api/${postID}`, update)
            .then(res => {
                setUserState(prevState => prevState.map(post => post._id !== postID ? post: res.data))
            })
            .catch(handleErr)
    };

    useEffect(() => {
        getAllPosts()
    }, []);

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addPost,
                removePost,
                editPost,
                resetAuthErr
            }}>
            { props.children }
        </UserContext.Provider>
    );
};

export default UserProvider;