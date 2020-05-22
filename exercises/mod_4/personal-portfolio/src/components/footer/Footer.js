import React from 'react';
import { SmileTwoTone } from '@ant-design/icons';

const Footer = () => {
    return (
        <div style={{
            height: '75px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem'
        }} >
            <br />
            <br /><p> Happy Coding!!! <SmileTwoTone /> </p>
            <p> ©2020 - Kenny Souvannaleut </p>
        </div>
    )
};

export default Footer;
