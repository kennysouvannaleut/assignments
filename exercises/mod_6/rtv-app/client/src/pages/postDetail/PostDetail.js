import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import UserContext from '../../context/userContext.js';
import CommentList from '../../components/comments/CommentList.js';
import CommentForm from '../../components/comments/CommentForm.js';

const Detail = () => {
    const { issueId } = useParams();

    const userContext = useContext(UserContext);
    const {
        user : { username, _id: userId },
        token,
        currentIssue,
        issueDetails,
        updateIssue,
        deleteIssue,
        allComments,
        newComment,
        upvoteIssue,
        downvoteIssue,
    } = userContext;

    const {
        title,
        description,
        createdBy,
        createdAt,
        usersWhoVoted,
        votes,
        _id
    } = currentIssue

    const [toggle, setToggle] = useState(false);

    const [descriptionInput, setDescriptionInput] = useState(description);

    useEffect(() => {
        issueDetails(issueId);
        allComments(issueId);
    }, []);

    const toggleEdit = () => {
        setToggle(!toggle)
        setDescriptionInput(description)
    };

    const handleChange = e => {
        const { value } = e.target;
        setDescriptionInput(value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        updateIssue(_id, descriptionInput);
        setToggle(!toggle);
    };

    const handleDelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-confirm'>
                        <h2>Confirm Delete</h2>
                        <p>Are you sure you want to delete your post?</p>
                        <button onClick={onClose} className='button'>No</button>
                        <button 
                            className='button'
                            onClick={() => {
                                deleteIssue(_id)
                                onClose()
                            }}
                        >
                            Yes
                        </button>
                    </div>
                )
            }
        })
    };

    return (
        <div className='issue-detail'>
            <div className='detail-user'>
                <p>posted by: </p>
                <Link className='detail-username' to={`/user/${ createdBy }`}>
                    <p>{ createdBy }</p>
                </Link>
            </div>
            { 
            createdBy === username && 
                <button onClick={ handleDelete }>Remove Issue</button>
            }
            { createdBy === username && 
                <>
                    <button onClick={ toggleEdit }>{toggle ? 'Cancel' : description ? 'Edit Description' : 'Add Description' }</button>
                </>
            }
            { toggle ? 
                <> 
                    <br />
                    <form containter='detail-description-input' onSubmit={handleSubmit}>
                        <textarea
                            className='input post-description-textarea'
                            onChange={ handleChange }
                            value={descriptionInput}
                            cols={50}
                            rows={3}
                            maxLength={300} 
                        />
                        <button className='button detal-save-description'>Save</button>
                    </form>
                </>
            :
                <p className='detail-description'>{description}</p>
            }
                <p> date: { createdAt }</p>
                <p> title: {title}</p>
                <p className='detail-votes'>votes: { votes }</p>
                { username !== createdBy && token && 
                <div className='vote-buttons'>
                    <button 
                        className='button'
                        onClick={ () => upvoteIssue(_id) }
                        disabled={usersWhoVoted && usersWhoVoted.includes(userId) && true }
                    >
                        Upvote
                    </button>
                    <button 
                        className='button'
                        onClick={ () => downvoteIssue(_id) }
                        disabled={usersWhoVoted && usersWhoVoted.includes(userId) && true }
                    >
                        Downvote
                    </button>
                </div>
                }
                <h2>Comments</h2>
                { 
                token &&
                    <CommentForm 
                        addOrEditComment={ newComment }
                        commentBtnText='Comment'
                        issueOrCommentId={ _id }
                    />
                }
                <CommentList />
        </div>
    );
};

export default Detail;
