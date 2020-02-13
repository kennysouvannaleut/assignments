import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    return ( 
        <ThemeContext.Consumer>
            {( themeContext ) => {
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return (
                    <nav style={{ background: theme.ui, color: theme.hex }}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )
            }}
        </ThemeContext.Consumer>
     );
}
 
export default Navbar;