import React from 'react'
import { ThemeConsumer } from './../userThemeContext'

const Button = () => (
        <ThemeConsumer>
            {( { toggleTheme, theme } ) => (
                <button onClick={ toggleTheme } className={ theme ? 'Light' : 'Dark' }>Toggle Theme</button>
            )}
        </ThemeConsumer>
)

export default Button