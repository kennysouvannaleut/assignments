import React, { useContext } from 'react';
import Comment from './Comment.js';
import UserContext from '../../context/userContext.js';

const CommentList = () => {
    const userContext = useContext(UserContext);
    const { 
        comments, 
        deleteComment, 
        user : { username }, 
        updateComment
    } = userContext;

    return (
        <div>
            { comments.map((comment, i) => 
                <Comment 
                    { ...comment }
                    key={ i }
                    commentId={ comment._id }
                    user={ username }
                    deleteComment={ deleteComment }
                    updateComment={ updateComment }
                />
            )}
        </div>
    );
};

export default CommentList;
