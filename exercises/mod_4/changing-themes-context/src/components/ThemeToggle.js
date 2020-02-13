import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        // console.log(this.context)
        const { isLightTheme, light, dark, toggleTheme } = this.context;
        const theme = isLightTheme ? light : dark;
        return (  
            <button onClick={ toggleTheme } style={{ background: theme.ui, color: theme.hex }}
            >Toggle Theme</button>
        );
    }
}

export default ThemeToggle;