import React from 'react'
import { ThemeConsumer } from './../userThemeContext'

const Footer = () => (
    <ThemeConsumer>
        {context => (
            <footer className={ context.theme ? 'Light' : 'Dark' }>
                My Awesome Footer
            </footer>
        )}
    </ThemeConsumer>
)

export default Footer