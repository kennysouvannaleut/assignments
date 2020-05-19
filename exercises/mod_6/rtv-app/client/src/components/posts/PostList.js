import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/userContext.js';
import PostCard from './PostCard.js';

const PostList = props => {
    const userContext = useContext(UserContext);
    const { 
        allIssues, 
        issues, 
        loading, 
        upvoteIssue, 
        downvoteIssue
    } = userContext;

    const { userPage } = props;

    useEffect(() => {
        if(!userPage) {
            allIssues();
        }
    }, [loading]);

    return (
        <div className='issues'>
            { 
            !loading ? (
                <div className='issues-grid-container'>
                    {
                    issues.map((issue, i) => {
                        return (
                            <PostCard
                                key={ i }
                                { ...issue }    
                                id={ issue._id }
                                upvoteIssue={ upvoteIssue }
                                downvoteIssue={ downvoteIssue }
                                userPage={ userPage }
                            /> )
                        })
                    }
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}; 

export default PostList;
