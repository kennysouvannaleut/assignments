import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';

class Navbar extends Component {
    render() { 
        return (  
            <UserContext.Consumer>{(deleteContext) => (
            <ThemeContext.Consumer>{(themeContext) => {
                const { isDeleted, toggleDelete } = deleteContext;
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>List Something</h1>
                        <div onClick={ toggleDelete }>
                            { isDeleted ? 'Yes' : 'No' }
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )
            }}</ThemeContext.Consumer>
            )}</UserContext.Consumer>
        );
    }
}
 
export default Navbar;