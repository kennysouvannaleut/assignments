import React from 'react';
import DevIcon from 'devicon-react-svg';

const DevIcons = () => {
    const iconStyle = {
        fill: '#B3B322',
        width: '4em'
    };

    return (
        <>
            <DevIcon style={iconStyle} icon='github_badge' />
            <DevIcon style={iconStyle} icon='react' />
            <DevIcon style={iconStyle} icon='mysql' />
            <DevIcon style={iconStyle} icon='sqllite' />
            <DevIcon style={iconStyle} icon='nodejs_small' />
            <DevIcon style={iconStyle} icon='html5' />
            <DevIcon style={iconStyle} icon='css3' />
            <DevIcon style={iconStyle} icon='database' />
            <DevIcon style={iconStyle} icon='linux' />
        </>
    );
};

export default DevIcons;