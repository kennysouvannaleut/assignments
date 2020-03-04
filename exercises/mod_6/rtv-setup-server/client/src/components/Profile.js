import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import FormContainer from './FormContainer';
import PostList from './PostList';

const Profile = () => {
    const { 
        user: { 
            username 
        },
        addPost, 
        // editPost,
        // removePost,
        posts 
    } = useContext(UserContext);

    return (
        <div className='profile'>
            <h1>Welcome { username }!</h1>
            <h3>Create Post</h3>
            <FormContainer
                addPost={ addPost } 
                // editPost={ editPost }
                // removePost={ removePost }
            />
            <h3>Your Posts</h3>
            <PostList 
                posts={ posts } 
            />
        </div>
    );
};

export default Profile;

