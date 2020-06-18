import React, { useState, useContext, Fragment } from 'react';
import axios from '../../utils'
import UserContext from '../../context/userContext';
import Comments from './Comments';
import { Button, Input, Typography } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

export default function CommentList(props) {
    const [comments, setComments] = useState('');

    const { user } = useContext(UserContext);

    const handleChange = e => {
        setComments(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

    const options = {
        createdBy: user._id,
        postId: props.postId,
        content: comments
    };
        
        axios.post('/api/comments/comment', options)
            .then(res => {
                if (res.data.success) {
                    setComments('');
                    props.handleRefresh(res.data.results);
                } else {
                    console.log('Error while saving to comment board.');
                }
            })
        };

        return (
            <div>
                <br />
                <Title 
                    level={ 3 }>Share your feedback on { props.movieTitle }!
                </Title>

                <hr />
                { console.log('COMMENT_LIST', props.commentList) }
                { props.commentList 
                && props.commentList.map((comment, i) => (
                    (!comment.responseTo && 
                        <Fragment key={ i }>
                            <Comments
                                comment={ comment }
                                commentList={ props.commentList }
                                postId={ props.postId } 
                                comment={ comment._id }
                                handleRefresh={ props.handleRefresh } 
                            />
                        </Fragment>
                    )
                ))
            }

            { props.commentList 
            && props.commentList.length === 0 && 
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '200px'
                }}
                    > Be the first to write a review and share your interest with other movie lovers!
                </div>
            }

            <form style={{ display: 'flex' }} onSubmit={ handleSubmit }>
                <TextArea 
                    style={{ width: '100%', borderRadius: '5px' }} 
                    onChange={ handleChange }
                    value={ comments }
                    placeholder='drop a comment or two...'
                />

                <br />
                <Button 
                    style={{ width: '20%', height: '52px' }} 
                    onClick={ handleSubmit }
                    > submit
                </Button>
            </form>
        </div>
    )
};
