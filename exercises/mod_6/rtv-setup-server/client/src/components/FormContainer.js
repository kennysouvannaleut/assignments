import React, { useState } from 'react';
import FormComponent from './FormComponent';

const FormContainer = (props) => {
    // console.log(props)
    const initialInputs = {
        date: '',
        title: '',
        description: ''
    };
    const [inputs, setInputs] = useState(initialInputs);

    const { addPost } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(inputs)
        setInputs(initialInputs);
    };

    return (
        <div>
            <FormComponent 
                handleChange={ handleChange }
                handleSubmit={ handleSubmit }
                inputs={ inputs }
                btnText='Create Post'
            />
        </div>
    );
};

export default FormContainer;