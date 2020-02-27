import React, { useState } from 'react';

const Form = (props) => {
    const initalInputs = { 
        firstName: props.firstName || '', 
        lastName: props.lastName || '', 
        living: props.living || '', 
        bountyAmount: props.bountyAmount || '', 
        type: props.type || '' 
    };
    const [inputs, setInputs] = useState(initalInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value 
        })
    )};
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs);
        props.submit(inputs, props._id);
        setInputs(initalInputs);
    };

    return (
    <form onSubmit={ handleSubmit }>
        <input 
            type='text' 
            name='firstName' 
            value={ inputs.firstName } 
            onChange={ handleChange } 
            placeholder='First Name'
        />

        <input 
            type='text' 
            name='lastName' 
            value={ inputs.lastName } 
            onChange={ handleChange } 
            placeholder='Last Name'
        />

        <input 
            type='number' 
            name='bountyAmount' 
            value={ inputs.bountyAmount } 
            onChange={ handleChange } 
            placeholder='Bounty Amount'
        />
        <br />

        <select
            name='type'
            value={ inputs.type }
            onChange={ handleChange }
        >
            <option value=''>-- PLEASE CHOOSE TYPE --</option>
            <option value='Sith'>Sith</option>
            <option value='Jedi'>Jedi</option>
        </select>

        <select
            name='living'
            value={ inputs.living }
            onChange={ handleChange }
        >
            <option value=''>-- LIVING ? --</option>
            <option value=''>Yeah!</option>
            <option value=''>Nah!</option>
        </select>
        <br />

        <button>{ props.btnText }</button>
    </form>
    );
};

export default Form;