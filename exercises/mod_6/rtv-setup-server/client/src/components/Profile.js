import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import PostForm from './PostForm';
import PostList from './PostList';
import Post from './Post';

const Profile = () => {
    const { 
        user: { 
            username 
        },
        addPost, 
        editPost,
        removePost,
        posts 
    } = useContext(UserContext);

    return (
        <div className='profile'>
            <h1>Welcome {username}!</h1>
            <h3>Create Post</h3>
            <PostForm
                addPost={ addPost } 
                editPost={ editPost }
                removePost={ removePost }
            />
            <h3>Your Posts</h3>
            <PostList 
                posts={ posts } 
            />
        </div>
    );
};

export default Profile;

