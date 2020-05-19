import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext.js';

const PostCard = props => {
    const { 
        _id,
        title, 
        // description,
        votes,
        createdBy,
        upvoteIssue,
        downvoteIssue,
        userPage 
    } = props;

    const userContext = useContext(UserContext);
    const { user : { username } } = userContext;

    return (
        <div className='card'>
        { !userPage && 
            <div className='card-user'>
                <Link className='card-username-link' to={ `/user/${ createdBy }`}>
                <p className='card-username'>{ createdBy }</p></Link>
            </div>
        }
        <Link to={ `/${ _id }/details`}>
            <p className='card-title'>{ title }</p>
                </Link>
                <div className='card-info'>
                    <div className='card-post-section'>
                        { username !== createdBy && 
                            <>
                                <button onClick={ () => upvoteIssue(_id) }>Upvote</button>
                                <button onClick={ () => downvoteIssue(_id) }>Downvote</button>
                            </>
                        }
                            <span> votes: { votes }</span>
                    </div>
                <br />
            </div>
        </div>
    );
};

export default PostCard;
