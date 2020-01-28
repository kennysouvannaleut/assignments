import React from 'react'
import { ThemeConsumer } from './../userThemeContext'

const Navbar = () => (
        <ThemeConsumer>
            {context => (
                <nav className={ context.theme ? 'Light' : 'Dark' }>
                    <ul>Home</ul>
                    <ul>About</ul>
                    <ul>Contact</ul>
                </nav>
                )}
        </ThemeConsumer>
)

export default Navbar
