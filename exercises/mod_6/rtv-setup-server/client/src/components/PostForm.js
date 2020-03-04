import React, { useState } from 'react';

const PostForm = (props) => {
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

    const { date, title, description } = inputs;

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
            <button>Create Post</button>
        </form>
    );
};

export default PostForm;