import React from 'react';
import { Link } from 'react-router-dom';

const Thumbnail = props => (
    <div className='project'>
        <Link to={ props.link }>
            <div className='project-title'>{ props.title }</div>
            <div className='project-category'>{ props.category }</div>
        </Link>
    </div>
);

export default Thumbnail;