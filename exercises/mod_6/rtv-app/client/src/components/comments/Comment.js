import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import CommentForm from './CommentForm.js';

const Comment = props => {
    const { 
        comment, 
        commentId, 
        createdBy, 
        deleteComment, 
        user,
        updateComment 
    } = props;

    const [toggle, setToggle] = useState(false);

    const toggleEditComment = () => {
        setToggle(prevToggle => !prevToggle)
    };

    const handleDeleteComment = commentId => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-config'>
                        <h2>Confirm Delete</h2>
                        <p>Are you sure you want to delete this comment?</p>
                        <button onClick={ onClose } className='button'>No</button>
                    <button
                        className='button'
                        onClick={() => {
                            deleteComment(commentId);
                            onClose();
                        }}
                    >
                        Yes, Delete it!
                    </button>
                </div> 
            )}
        })
    }

    return (
        <div>
            { user === createdBy && 
                <div className='comment-buttons'>
                    <button className='button' onClick={() => toggleEditComment()}>{ toggle ? 'Cancel' : 'Edit' }</button>
                    { !toggle && <button className='button' onClick={() => handleDeleteComment(commentId)}>X</button>}
                </div>
            }
            <div className='comment'>
                <div className='comment-user'>
                    <Link to={`/user/${ createdBy }`}></Link>
                </div>
            </div>
            { toggle ? 
            <>
                <CommentForm 
                    addOrEditComment={ updateComment }
                    commentBtnText='Save'
                    btnType='comment-save-button'
                    issueOrCommentId={ commentId }
                    toggle={ toggleEditComment }
                    prevComment={ comment }
                    formType='edit-comment-input'
                />
            </>
        :
                <p className='user-comment-box'>
                    <Link className='comment-username-link' to={`/user/${ createdBy }`}>
                        <b className='comment-username'>{ createdBy }</b>
                    </Link>
                    { comment }
                </p>
                }
        </div>
    );
};

export default Comment;
