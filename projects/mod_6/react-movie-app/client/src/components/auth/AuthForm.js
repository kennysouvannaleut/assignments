import React from 'react';

const AuthForm = props => {

    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            name,
            email,
            password
        }
    } = props;
    
    return (
        <form name='form' onSubmit={ handleSubmit }>
            <input 
                type='text'
                name='name'
                value={ name }
                onChange={ handleChange }
                required={ true }
                placeholder='Full name'
            />
            <input 
                type='email'
                name='email'
                value={ email }
                onChange={ handleChange }
                required={ true }
                placeholder='Email'
            />
            <input
                type='password'
                name='password'
                value={ password }
                onChange={ handleChange }
                minLength={ 5 }
                required={ true }
                placeholder='Password'
            />
            <button>{ btnText }</button>
            { errMsg && <p style={{ color: 'red' }}>{ errMsg }</p> }
        </form>
    );
};

export default AuthForm;
