import React from 'react'
import { ThemeConsumer } from './../userThemeContext'

const Main = () => (
    <ThemeConsumer>
        {context => (
            <main>
                <h2 className={ context.theme ? 'Light' : 'Dark' }>
                Click the button to toggle the { context.theme ? 'Dark' : 'Light' } Theme!
                </h2>
            </main>
        )}
    </ThemeConsumer>
)

export default Main