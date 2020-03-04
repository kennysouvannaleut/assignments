import React from 'react';

const Post = props => {
    const { date, title, description } = props;

    return (
        <div className='post'>     
            <h3>{ title }</h3>
            <p>{ description }</p>
            <p>{ date }</p>  
        </div>
    );
};

export default Post;