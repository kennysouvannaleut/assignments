import React from 'react';

const Footer = () => {
    const footerStyle = {
        padding: '2px',
        minHeight: '100px',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 'small',
        textAlign: 'center'
    };

    return (
        <footer style={footerStyle}>©2020 - Kenny Souvannaleut</footer>
    );
};

export default Footer;

