import React, { useState, useContext } from 'react';
import AuthForm from './AuthForm';
import { UserContext } from '../context/UserProvider';

const initialInputs = { username: '', password: '' };

const Auth = () => {
    const [inputs, setInputs] = useState(initialInputs);
    const [toggle, setToggle] = useState(false);

    const { signup, login } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    };

    const handleSignup = (e) => {
        e.preventDefault();
        signup(inputs);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        login(inputs);
    };

    return (
        <div className='auth-container'>
            <h1>RTV App</h1>
            { !toggle ?
            <>
                <AuthForm
                    handleChange={ handleChange }
                    handleSubmit= { handleSubmit }
                    inputs={ inputs }
                    btnText='Sign Up'
                />
                <p onClick={ () => setToggle(prev => !prev) }>Already an existing user?</p> 
            </>
        :
            <>
            </>
            }
        </div>
    )
};

export default Auth;