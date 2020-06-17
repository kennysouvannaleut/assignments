import React, { useState, useContext } from 'react';
import axios  from '../../utils'
import UserContext from '../../context/userContext';
import CommentRatings from './CommentRatings';
import { Avatar, Button, Comment, Input } from 'antd';

const { TextArea } = Input;

export default function Comments(props) {
    const [comments, setComments] = useState('');
    const [response, setResponse] = useState(false);

    const { user } = useContext(UserContext);

    const handleResponse = () => {
        setResponse(!response);
    };

    const handleChange = e => {
        setComments(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
    
    const options = {
        createdBy: user._id,
        postId: props.postId,
        responseTo: props.commentId,
        content: comments
    };

    axios.post('/api/comments/comment', options)
        .then(res => {
            if (res.data.success) {
                setComments(comments, ...res.data.results);
                props.handleRefresh(res.data.results);
            } else {
                console.log('Error while saving comment.');
            }
        })
    };
 
    const actions = [
        <CommentRatings
            commentId={ props.commentId }
            userId={ user._id } 
        />, 
            <span 
                onClick={ handleResponse } 
                key='comment-basic-reply-to'
                > Reply to
            </span>
        ]

    return (
        <div>
            <Comment
                actions={ actions }
                author={ props.createdBy }
                avatar={
                    <Avatar
                        src={ props.image }
                        alt='image'
                    /> 
                }
                content={
                    <p>{ props.content }</p>
                }>
            </Comment>

            { response && 
                <form style={{ display: 'flex' }} onSubmit={ handleSubmit }>
                    <TextArea
                        style={{ width: '100%', borderRadius: '5px' }}
                        onChange={ handleChange }
                        value={ comments }
                        placeholder='some comment...'
                    />
                    
                    <br />
                    <Button 
                        style={{ width: '20%', height: '52px' }} 
                        onClick={ handleSubmit }
                        > submit
                    </Button>
                </form>
            }
        </div>
    )
};
