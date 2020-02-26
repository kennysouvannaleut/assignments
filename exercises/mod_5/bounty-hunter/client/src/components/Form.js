import React, { useState } from 'react';

const Form = (props) => {
    const initalInputs = 
    { 
        firstName: props.firstName || '', 
        lastName: props.lastName || '', 
        living: props.living || '', 
        bounty: props.bounty || '', 
        type: props.type || '' 
    };
    const [inputs, setInputs] = useState(initalInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value })
    )};
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs)
        props.submit(inputs, props._id);
        setInputs(initalInputs)
    };

    return (
    <form onSubmit={ handleSubmit }>
        <input 
            type='text' 
            name='firstName' 
            value={ inputs.firstName } 
            onChange={ handleChange } 
            placeholder='First Name...'
        />
        <input 
            type='text' 
            name='lastName' 
            value={ inputs.lastName } 
            onChange={ handleChange } 
            placeholder='Last Name...'
        />
        <input 
            type='number' 
            name='bounty' 
            value={ inputs.bounty } 
            onChange={ handleChange } 
            placeholder='Bounty Amount...'
        />
        <button>{ props.btnText }</button>
    </form>
    );
};

export default Form;