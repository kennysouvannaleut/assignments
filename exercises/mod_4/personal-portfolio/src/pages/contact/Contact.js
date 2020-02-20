import React, { useState } from 'react';
// import 'bootstrap/dis/css/bootstrap.min.css'
// import * as emailjs from 'emailjs-com';
// import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'react-strap'
import { Prompt } from 'react-router-dom';

const Contact = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('')
    const [text, setText] = useState(''); 
    // const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const {value} = e.target;
        setText(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setText('');

    // const templateParams = {
    //     from_name: email,
    //     to_name: 'ksouvannaleut@linuxmail.org',
    //     subject: subject,
    //     message_html: message,
    // }

    // emailjs.send(
    //     'gmail',
    //     'template_XXXXXXXX',
    //     templateParams,
    //     'user_XXXXXXXXXXXXXXXXXXXX'
    // )

        // resetForm()

    }

    const inputStyle = {
        margin: 10,
        width: 400,
        height: 70
    };

    return (
        <div>
            <input
                value={text}
                placeholder='Drop me a line...'
                onChange={handleChange}
                style={inputStyle}
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

