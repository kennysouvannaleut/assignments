import React from 'react';

const FormComponent = props => {
    const {
        handleChange,
        handleSubmit,
        btnText,
        inputs : { title, description }
    } = props;

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                name='title'
                value={ title }
                onChange={ handleChange }
                placeholder='Title'
            />
            <br />
            <textarea
                name='description'
                value={ description }
                onChange={ handleChange }
                placeholder='provide some description'
                cols={ 50 }
                rows={ 10 }
                maxLength={ 300 }
            />
            <br />
            <button>{ btnText }</button>
        </form>
    );
};

export default FormComponent;
