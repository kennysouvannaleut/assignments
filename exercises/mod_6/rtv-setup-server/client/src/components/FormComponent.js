import React from 'react';

const FormComponent = props => {
    const {
        handleChange,
        handleSubmit,
        btnText,
        inputs: {
            date,
            title,
            description
        }
    } = props;

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='date'
                name='date'
                value={ date }
                onChange={ handleChange }
            />
            
            <input 
                type='text'
                name='title'
                value={ title }
                onChange={ handleChange }
                placeholder='Title'
            />

            <input
                type='text'
                name='description'
                value={ description }
                onChange={ handleChange }
                placeholder='Description'
            />
            <button>{ btnText }</button>
        </form>
    );
};

export default FormComponent;