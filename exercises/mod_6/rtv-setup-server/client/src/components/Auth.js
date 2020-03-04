import React, { useState, useContext } from 'react';
import AuthForm from './AuthForm';
import { UserContext } from '../context/UserProvider';

const Auth = () => {
    const initialInputs = { username: '', password: '' };

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
            <h1>Right To Vote (RTV) App</h1>
            { !toggle ?
            <>
                <AuthForm
                    handleChange={ handleChange }
                    handleSubmit={ handleSignup }
                    inputs={ inputs }
                    btnText='Sign Up'
                />
                <p onClick={ () => setToggle(prev => !prev) }>Existing Users? Sign In</p> 
            </>
        :
            <>
                <AuthForm
                    handleChange={ handleChange }
                    handleSubmit={ handleLogin }
                    inputs={ inputs }
                    btnText='Login'
                />
                <p onClick={ () => setToggle(prev => !prev) }>New Users? Sign Up</p>
            </>
            }
        </div>
    );
};

export default Auth;