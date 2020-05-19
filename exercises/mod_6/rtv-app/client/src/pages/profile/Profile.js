import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/userContext.js';
import FormContainer from '../../components/form/FormContainer.js';

const Profile = () => {
    const userContext = useContext(UserContext);
    const { 
        user : { username },
        createIssue,
        currentUserIssue
    } = userContext;

    useEffect(() => {
        currentUserIssue()
    }, [])

    return (
        <div className='profile-post'>
            <h1>Welcome @{ username }!</h1>
            <h3>Create a new issue</h3>
            <FormContainer
                createIssue={ createIssue }
                user={ username }
            />
        </div>
    );
};

export default Profile;
