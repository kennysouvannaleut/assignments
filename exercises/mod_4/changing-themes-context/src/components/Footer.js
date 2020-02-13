import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => {
    return ( 
        <ThemeContext.Consumer>
            {( themeContext ) => {
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return (
                    <footer style={{ background: theme.ui, color: theme.hex }}>
                        Check out this AWESOME footer!!!
                    </footer>
                )
            }}
        </ThemeContext.Consumer>
    );
}

export default Footer;