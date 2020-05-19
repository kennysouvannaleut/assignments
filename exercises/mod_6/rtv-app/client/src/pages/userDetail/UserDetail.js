import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../context/userContext.js';
import PostList from '../../components/posts/PostList.js';

const UserDetail = () => {
    const { username } = useParams();

    const userContext = useContext(UserContext);
    const { userIssues, issues } = userContext;

    useEffect(()=> {
        userIssues(username);
    }, []);

    return (
        <div className='user-detail'>
            <div className='user-detail-info'>
                <div className='user-detail-text'>
                    <h2>{ username }</h2>
                    <p className='user-detail-post-num'>
                        <b>{ issues.length }</b> issue{(issues.length > 1 || issues.length === 0) && 's' }
                    </p>
                </div>
            </div>
            <PostList userPage={ true } />
        </div>
    );
};

export default UserDetail;
