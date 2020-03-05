import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import FormContainer from '../components/FormContainer';
import PostList from '../components/PostList';

const Profile = () => {
    const { 
        user: { 
            username
        },
        addPost, 
        posts 
    } = useContext(UserContext);

    return (
        <div className='profile'>
            <h1>Welcome { username }!</h1>
            <h3>Create Post</h3>
            <FormContainer
                addPost={ addPost } 
            />
            <h3>Your Posts</h3>
            <PostList 
                posts={ posts } 
            />
        </div>
    );
};

export default Profile;

