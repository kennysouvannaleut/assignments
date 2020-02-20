import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';

const Contact = () => {
    const [text, setText] = useState(''); 

    const handleChange = (e) => {
        const {value} = e.target;
        setText(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setText('');
    }

    const style = {
        margin: 10,
        width: 400,
        height: 70
    };

    return (
        <div>
            <input
                value={text}
                placeholder='comment...'
                onChange={handleChange}
                style={style}
            />
            <div>
                <button onClick={handleSubmit}>Send</button>
            </div>

            <Prompt
                when={text !== ''}
                message='Are you sure you want to leave this page without sending a message?'
            />
        </div>
    );
};

export default Contact;

