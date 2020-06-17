import React, { useEffect, useState, Fragment } from 'react';
import Comments from './Comments';

export default function CommentResponse(props) {
    const [comments, setComments] = useState(0);
    const [response, setResponse] = useState(false);

    useEffect(() => {

        let commentNo = 0;

            props.commentList.map(comment => {

            if (props.responseTo === comment) {
                commentNo++
            }
            return commentNo;
        })
        setComments(commentNo);
    }, [props.commentList, props.commentId]);

    const handleChange = () => {
        setResponse(response);
    };
 
    const renderResponses = () => {
        props.commentList.map((comment, i) => (
            <Fragment key={ i }>
                { comment.responseTo === comment._id && 
                    <div style={{ width: '80%', marginLeft: '40px' }}>
                        <Comments
                            comment={ comment } 
                            postId={ props.postId } 
                            handleRefresh={ props.handleRefresh } 
                        />
                        <CommentResponse
                            commentList={ props.commentList }
                            commentId={ comment._id }
                            postId={ props.postId }
                            handleRefresh={ props.handleRefresh }
                        /> 
                    </div>
                }
            </Fragment>
        ))
    };

    return (
        <div>
            { comments > 0 && 
                <p style={{ fontSize: '14px', margin: 0, color: 'gray' }}
                    onClick={ handleChange }
                    > There are { comments } comments posted on the discussion board.
                </p> 
                }
            { response && renderResponses(props.commentId) }
        </div>
    )
};
