import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Main = () => {
    return ( 
        <ThemeContext.Consumer>
            {( themeContext ) => {
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return (
                    <main style={{ background: theme.ui, color: theme.hex }}>
                        <h2>Click the toggle button to change themes...</h2>
                    </main>
                )
            }}
        </ThemeContext.Consumer>
     );
}
 
export default Main;