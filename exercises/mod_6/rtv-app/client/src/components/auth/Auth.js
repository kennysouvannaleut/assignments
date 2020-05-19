import React, { useState, useContext } from 'react';
import UserContext from '../../context/userContext.js';
import AuthForm from './AuthForm.js';

export default () => {
    const initialInputs = { username : '', password : '' };

    const [inputs, setInputs] = useState(initialInputs);
    const [toggle, setToggle] = useState(false);

    const userContext = useContext(UserContext);
    const { signup, signin, errMsg, resetAuthErr } = userContext;

    const handleChange = e => { 
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value
        })
    )};

    const handleSignup = e => {
        e.preventDefault();
        signup(inputs);
    };

    const handleSignin = e => {
        e.preventDefault();
        signin(inputs);
    };

    const toggleForm = () => {
        setToggle(prevToggle => !prevToggle)
        resetAuthErr();
    };

    return (
        <div className='auth-container'>
            <h1>Right To Vote App</h1>
            { !toggle ?
            <>
                <AuthForm
                    handleChange={ handleChange }
                    handleSubmit={ handleSignup }
                    inputs={ inputs }
                    btnText='Signup'
                    errMsg={ errMsg }
                />
                <p onClick={ toggleForm }>Existing user? Sign In</p> 
            </>
        :
            <>
                <AuthForm
                    handleChange={ handleChange }
                    handleSubmit={ handleSignin }
                    inputs={ inputs }
                    btnText='Signin'
                    errMsg={ errMsg }
                />
                <p onClick={ toggleForm }>New user? Create an account</p>
            </>
            }
        </div>
    );
};
