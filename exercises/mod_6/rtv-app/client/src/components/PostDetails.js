import React from 'react';

const PostDetails = props => {
    const { postDate, title, description } = props;

    return (
        <div className='post'>     
            <h3>{ title }</h3>
            <p>{ description }</p>
            <p>{ postDate }</p>  
        </div>
    );
};

export default PostDetails;