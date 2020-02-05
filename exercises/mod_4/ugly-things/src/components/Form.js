import React, { useContext, useState } from 'react';
import { UglyThingsContext } from '../contexts/UglyThingsContext';

const Form = () => {
    const { addUglyThings } = useContext(UglyThingsContext);
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(title, imgUrl, description);
        addUglyThings(title, imgUrl, description);
        setTitle('');
        setImgUrl('');
        setDescription('');
    }

    return (  
        <form className='form-container' onSubmit={ handleSubmit }>
            <input 
                style={ inputTextStyle }
                type='text' 
                name='title'
                placeholder='Title' 
                value={ title }
                onChange={ (e) => setTitle(e.target.value) } />
            <input 
                style={ inputTextStyle }
                type='text' 
                name='imgUrl'
                placeholder='ImgURL' 
                value={ imgUrl }
                onChange={ (e) => setImgUrl(e.target.value) } />
            <input 
                style={ inputTextStyle }
                type='text' 
                name='description'
                placeholder='Description' 
                value={ description }
                onChange={ (e) => setDescription(e.target.value) } />
            <br />
            <br />
            <button style={ buttonStyle }>Submit</button>
        </form>
    );
}

const inputTextStyle = {
    width: '100%',
    padding: '10px',
    margin: '6px, 0px',
    border: 1
};

const buttonStyle = {
    margin: '10px, 10px, 10px, 10px'
};
 
export default Form;