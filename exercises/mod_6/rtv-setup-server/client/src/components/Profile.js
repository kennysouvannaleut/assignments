import React, { useContext, Profiler } from 'react';
import { UserContext } from '../context/UserProvider';
import PostForm from './PostForm';
import PostList from './PostList';
import Post from './Post';

const Profile = () => {
    const { user: { username } } = useContext(UserContext);

    return (
        <div className='profile'>
            <h1>Welcome {username}!</h1>
            <h1>Add A Post</h1>
            <PostForm />
            <h3>Your Posts</h3>
        </div>
    )
};

export default Profile;

