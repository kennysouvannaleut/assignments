import React from 'react';

const CurrentCard = props => {
    const {
        title,
        description,
        votes
    } = props;
    
    return (
        <div className='card'>
            <div className='user-issue'> 
                <p> Title: { title }</p>
                <p> Decription: { description }</p>
                <p> Votes: { votes }</p>
            </div>
        </div>
    );
};

export default CurrentCard;
