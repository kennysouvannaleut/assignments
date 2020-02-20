import React from 'react';
import { Link } from 'react-router-dom';

const ThumbNail = props => (
    <div className='project'>
        <Link to={props.link}>
            <div className='project-name'>{props.name}</div>
            <div className='project-description'>{props.description}</div>
        </Link>
    </div>
);

export default ThumbNail;