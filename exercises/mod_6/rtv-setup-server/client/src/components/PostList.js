import React from 'react';
import Post from './Post';

const emptyListStyle = {
    margin: 20,
    textAlign: 'center'
};

const PostList = props => {
    const { posts } = props;

    return posts.length ? (
        <div className='post-list'>
            <ul>
                { posts.map(post => {
                return (
                    <Post 
                        {...post}
                        key={ post._id }
                    />
                    )
                })}
            </ul>
        </div>
    ):( 
        <div style={ emptyListStyle }> No recent posts! :(
        </div>
    )
}; 

export default PostList;
