import React from "react"
import { ThemeConsumer } from "./../userThemeContext"

const Button = () => (
    <div>
        <ThemeConsumer>
            {({changeTheme}) => (
                <button className="Button" onClick={() => changeTheme(this.changeTheme) } >Toggle Theme</button>
            )}
        </ThemeConsumer>
    </div>
)


export default Button