import React, { useState, useContext } from 'react';
import UserContext from '../../context/userContext';
import AuthForm from './AuthForm';
import { Typography } from 'antd'

const { Title, Text } = Typography;

export default function Auth() {
    const initialInputs = { 
        name: '', 
        email : '',
        password: ''
    };

    const [inputs, setInputs] = useState(initialInputs);
    const [toggleAuth, setToggleAuth] = useState(false);

    const { 
        register, 
        login, 
        errMsg, 
        resetAuthErr 
    } = useContext(UserContext);

    const handleChange = e => { 
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        })
    )};

    const handleRegister = e => {
        e.preventDefault();
        register(inputs);
    };

    const handleLogin = e => {
        e.preventDefault();
        login(inputs);
    };

    const toggleForm = () => {
        setToggleAuth(prevToggleAuth => !prevToggleAuth)
        resetAuthErr();
    };

    return (
        <div className='auth-container'>
            <Title level={ 1 }>React Movie App</Title>
            { !toggleAuth ?
            <>
                { <Title level={ 3 }>Register</Title> }
                <AuthForm
                    handleChange={ handleChange }
                    handleSubmit={ handleRegister }
                    inputs={ inputs }
                    btnText='Register'
                    errMsg={ errMsg }
                />
                <Text 
                    type='warning'
                    onClick={ toggleForm }
                    > Already have an account? Login here.
                </Text> 
            </>
        :
            <>
                { <Title level={ 3 }>Login</Title> }
                <AuthForm
                    handleChange={ handleChange }
                    handleSubmit={ handleLogin }
                    inputs={ inputs }
                    btnText='Login'
                    errMsg={ errMsg }
                />
                <Text 
                    type='warning' 
                    onClick={ toggleForm } 
                    > Don't have an account yet? Register, it's free.
                </Text>
            </>
            }
        </div>
    );
};
