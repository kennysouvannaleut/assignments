import React, { useEffect, useState, Fragment } from 'react';
import axios from '../../utils';
import { Tooltip } from 'antd';
import { 
    LikeOutlined, 
    LikeFilled, 
    DislikeOutlined, 
    DislikeFilled 
} from '@ant-design/icons';

export default function CommentRatings(props) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [likeAction, setLikeAction] = useState(null);
    const [dislikeAction, setDislikeAction] = useState(null);

    let options = {};

    if (props.video) {
        options = { videoId: props.videoId, userId: props.userId }
    } else {
        options = { commentId: props.commentId, userId: props.userId }
    };

    useEffect(() => {

        axios.post('/api/ratings/get_likes', options)
            .then(res => {
                if (res.data.success) {
                    setLikes(res.data.results.length);

                  res.data.results.map(l => {
                        if (l.userId === props.userId) {
                            setLikeAction('liked');
                        }
                    })
                } else {
                    console.log('Error getting user likes.');
                }
            })

        axios.post('/api/ratings/get_dislikes', options)
            .then(res => {
                if (res.data.success) {
                    setDislikes(res.data.results.length);

                    res.data.results.map(d => {
                        if (d.userId === props.userId) {
                            setDislikeAction('disliked');
                        }
                    })
                } else {
                    console.log('Error getting user dislikes.');
                }
            })
    }, []);

    const like = () => {
        if (likeAction === null) {
            axios.post('/api/ratings/like', options)
                .then(res => {
                    if (res.data.success) {
                        setLikes(likes + 1);
                        setLikeAction('liked');

                    if (dislikeAction !== null) {
                        setDislikes(dislikes - 1);
                        setDislikeAction(null);
                    }
                } else {
                    console.log('Something went wrong.');
                }
            })
        } else {

            axios.post('/api/ratings/like', options)
                .then(res => {
                    if (res.data.success) {
                        setLikes(likes - 1);
                        setLikeAction(null);
                    } else {
                        console.log('Something went wrong.');
                    }
                })
            }
        };

    const dislike = () => {
        if (dislikeAction !== null) {
            axios.post('/api/ratings/like', options)
                .then(res => {
                    if (res.data.success) {
                        setDislikes(dislikes - 1);
                        setDislikeAction(null);
                    } else {
                        console.log('Something went wrong.');
                    }
                })
        } else {
            
            axios.post('/api/ratings/dislike', options)
                .then(res => {
                    if (res.data.success) {
                        setDislikes(dislikes + 1);
                        setDislikeAction('disliked');

                    if (likeAction !== null ) {
                        setLikeAction(null);
                        setLikes(likes - 1);
                        }
                    } else {
                        console.log('Something went wrong.');
                    }
                })
            }
        };

    return (
        <Fragment>
            <span key='comment-basic-like'>
                <Tooltip title='Like'>
                    <LikeOutlined
                        type='like'
                        theme={ likeAction === 'liked' ? LikeFilled : LikeOutlined }
                        onClick={ like }
                    />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{ likes }</span>
            </span> 
            <span key='comment-basic-dislike'>
                <Tooltip title='Dislike'>
                    <DislikeOutlined
                        type='dislike'
                        theme={ dislikeAction === 'disliked' ? DislikeFilled : DislikeOutlined }
                        onClick={ dislike }
                    />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{ dislikes }</span>
            </span> 
        </Fragment>
    )
};
