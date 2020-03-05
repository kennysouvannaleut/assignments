import React from 'react';
import PostDetails from './PostDetails';
// import Public from '../pages/Public';

const PostList = props => {
    const { posts } = props;

    return posts.length ? (
        <div className='post-list'>
            <ul>
                { posts.map(post => {
                return (
                    <PostDetails 
                        {...post}
                        key={ post._id }
                    />
                    )
                })}
            </ul>
        </div>
    ):( 
        <div style={ { color: 'blue' } }> No recent posts! :(
        </div>
    )
}; 

export default PostList;
