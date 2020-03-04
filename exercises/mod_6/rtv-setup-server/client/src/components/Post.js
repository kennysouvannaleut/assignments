import React from 'react';

const Post = (props) => {
    const { title, description } = props;

    return (
        <div className='post'>       
            <h3>{ title }</h3>
            <p>{ description }</p>
        </div>
    );
};

export default Post;