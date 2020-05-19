import React, { useState } from 'react';

const CommentForm = props => {
    const { 
        addOrEditComment,
        issueOrCommentId, 
        commentBtnText,
        toggle,
        prevComment,
        formType,
        btnType
    } = props;

    const [comment, setComment] = useState({ comment: prevComment || '' });

    const handleChange = e => {
        const { value } = e.target;
        setComment({ comment: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addOrEditComment(issueOrCommentId, comment);
        setComment({ comment: '' });
        toggle && toggle();
    };

    return (
        <div className='comment-form'>
            <form onSubmit={ handleSubmit }>
                <textarea
                    type='text' 
                    onChange={ handleChange }
                    value={ comment.comment } 
                    placeholder='drop a comment...' 
                    rows={ 1 }
                    cols={ 60 }
                    className={`input comment-input ${ formType }`}
                    maxLength={ 200 }
                />
                <button className={`button comment-form-button ${ btnType }`}>{ commentBtnText }</button>
            </form>
        </div>
    );
};

export default CommentForm;
