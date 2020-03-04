import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`
    return config;
});

const handleError = err => console.log(err.response.data.errMsg);

const UserProvider = (props) => {
    const initialState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        posts: []
    };
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
                    token,
                    success: true
                }))
            })
            .catch(handleError)
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
            .catch(handleError)
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

    const getUserPosts = () => {
        userAxios.get('/api/post/user')
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: res.data     
                }))  
            })
            .catch(handleError)
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
            .catch(handleError)
    };

    const removePost = (postID) => {
        userAxios.delete(`/api/${postID}`)
            .then(res => {
                setUserState(prevState => prevState.filter(post => post._id !== postID))
            })
            .catch(handleError)
    };

    const editPost = (update, postID) => {
        userAxios.put(`/api/${postID}`, update)
            .then(res => {
                setUserState(prevState => prevState.map(post => post._id !== postID ? post: res.data))
            })
            .catch(handleError)
    };

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addPost,
                removePost,
                editPost
            }}>
            { props.children }
        </UserContext.Provider>
    );
};

export default UserProvider;