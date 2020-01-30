import React, { useContext, useState } from 'react';
import { UglyThingContext } from '../contexts/UglyThingContext';

const UglyThingForm = () => {
    const { addUglyThing } = useContext(UglyThingContext);
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(title, imgUrl, description);
        addUglyThing(title, imgUrl, description);
        setTitle('');
        setImgUrl('');
        setDescription('');
    }
    return (  
        <form className='UglyThingForm' onSubmit={ handleSubmit }>
            <input type='text' placeholder='Title' value={ title }
                onChange={(e) => setTitle(e.target.value)} required />
            <input type='text' placeholder='ImgURL' value={ imgUrl }
                onChange={(e) => setImgUrl(e.target.value)} />
            <input type='text' placeholder='Description' value={ description }
                onChange={(e) => setDescription(e.target.value)} />
                <br />
                <br />
                <button>Submit</button>
        </form>
    );
}
 
export default UglyThingForm;