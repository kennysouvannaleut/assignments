import React, { useState } from 'react';
import UserContext from './userContext.js';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const UserProvider = props => {
    const initialState = {
        user : JSON.parse(localStorage.getItem('user')) || {},
        token : localStorage.getItem('token') || '',
        issues : [],
        currentIssue : {
            title : '',
            createdBy : '',
            description : '',
            votes : ''
        },
        comments : [],
        loading : true,
        errMsg : ''
    };

    const [userState, setUserState] = useState(initialState);

    const { goBack, push } = useHistory();

    const signup = credentials => {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token,
                    success : true
                }));
            })
            .catch(err => {
                if (err.response) {
                    handleAuthErr(err.response.data.errMsg);
                    console.error(err); 
            }
        });
    };

    const signin = credentials => {
        axios.post('/auth/signin', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                currentUserIssue();
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token,
                    success : true
                }));
            })
            .catch(err => {
                if (err.response) {
                handleAuthErr(err.response.data.errMsg);
                console.error(err); 
            }
        });
    };

    const signout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user : {},
            issues : [],
            currentIssue : null,
            comments : [],
            errMsg : ''
        })
        alert('Logged out successfully');
    };

    const handleAuthErr = errMsg => {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        })
    )};

    const resetAuthErr = () => {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg : ''
        })
    )};

    const currentUserIssue = () => {
        userAxios.get(`/api/issues/current-user`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues : res.data,
                    loading : false     
                }));  
            })
            .catch(err => {
                console.error(err);
        });
    };


    const allIssues = () => {
        userAxios.get('/api/issues/all')
            .then(res => { 
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues : res.data,
                    loading : false
                })); 
            })
            .catch(err => {
                console.error(err);
        });
    };

    const createIssue = newIssue => {
        userAxios.post('/api/issues/create', newIssue)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues : [
                        ...prevUserState.issues, 
                        res.data
                    ]
                }));
                push('/current-user')
            })
            .catch(err => {
                console.error(err);
        });
    };

    const userIssues = username => {
        userAxios.get(`/api/issues/user/${username}`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues : res.data,
                    loading : false
                }));
            })
            .catch(err => {
                console.error(err);
        });
    };

    const issueDetails = issueId => {
        userAxios.get(`/api/issues/${issueId}/details`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    currentIssue : res.data,
                    issues: res.data
                }));
            })
            .catch(err => {
                console.error(err);
        });
    };

    const deleteIssue = issueId => {
        userAxios.delete(`/api/issues/${issueId}/delete`)
            .then(() => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues : prevUserState.issues.filter(issue => issue._id !== issueId)
                }));
                goBack();
            })
            .catch(err => {
                console.error(err)
        });
    }

    const updateIssue = (issueId, description) => {
        const updatedIssue = {
            ...userState.currentIssue,
            description: description
        }
        userAxios.put(`/api/issues/${issueId}/update`, updatedIssue)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState, 
                    currentIssue : res.data
                }));
            })
            .catch(err => {
                console.error(err);
                alert('Your post has been updated');
        });
    };

    const upvoteIssue = issueId => {
        userAxios.put(`/api/issues/${issueId}/upvote`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues : prevUserState.issues.map(issue => (
                        issue._id === issueId ? res.data : issue)),
                        currentIssue: res.data
                }));
            })
            .catch(err =>  {
                console.error(err)
                alert('You can only vote once per issue');
        });
    };

    const downvoteIssue = issueId => {
        userAxios.put(`/api/issues/${issueId}/downvote`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues : prevUserState.issues.map(issue => (
                        issue._id === issueId ? res.data : issue))
                }));
            })
            .catch(err =>  {
                console.error(err)
                alert('You can only vote once per issue');
        });
    };

    const allComments = issueId => {
        userAxios.get(`/api/comments/${issueId}`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments : [...res.data.reverse()]
                }));
            })
            .catch(err => {
                console.error(err)
        });
    };

    const newComment = (issueId, create) => {
        userAxios.post(`/api/comments/issue/${issueId}`, create)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments : [
                        ...prevUserState.comments,
                        res.data
                    ]
                }));
            })
            .catch(err => {
                console.error(err)
        });
    };

    const deleteComment = commentId => {
        userAxios.delete(`/api/comments/${commentId}`)
            .then(() => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments : prevUserState.comments.filter(comment => comment._id !== commentId)
                }));
            })
            .catch(err => {
                console.error(err)
        });
    };

    const updateComment = (commentId, updatedComment) => {
        userAxios.put(`/api/comments/${commentId}`, updatedComment)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments : prevUserState.comments.map(comment => (
                        comment._id !== commentId ? comment : res.data))
                }));
            })
            .catch(err => {
                console.error(err)
        });
    };
    
    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                signin,
                signout,
                resetAuthErr,
                currentUserIssue,
                allIssues,
                userIssues,
                issueDetails,
                createIssue,
                deleteIssue,
                updateIssue,
                upvoteIssue,
                downvoteIssue,
                allComments,
                newComment,
                deleteComment,
                updateComment
            }} 
                >
                { props.children }
        </UserContext.Provider>
    );
};

export default UserProvider;
