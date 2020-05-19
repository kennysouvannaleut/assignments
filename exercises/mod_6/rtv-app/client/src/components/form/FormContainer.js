import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import FormComponent from './FormComponent.js';

const FormContainer = props => {
    const { createIssue, user } = props;

    const createDate = () => {
        const month = new Date().toLocaleString('default', { month: 'long' });
        const dateArr = Date().split(' ');
        return `${month} ${dateArr[2]}, ${dateArr[3]}`
    }

    const initialInputs = {
        user : user,
        title : '',
        description : '',
        likes : '',
        dateAdded : createDate()
    };

    const [inputs, setInputs] = useState(initialInputs);
    const [redirect, setRedirect] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value
        })
    )};

    const handleSubmit = e => {
        e.preventDefault();
        createIssue(inputs)
        setInputs(initialInputs);
        setRedirect(true);
    };

    return (
        redirect ?
        <Redirect to='/current-user' /> :
        <FormComponent 
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
            inputs={ inputs }
            btnText='submit'
        />
    );
};

export default FormContainer;
