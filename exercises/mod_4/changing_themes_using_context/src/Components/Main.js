import React from "react"
import { ThemeConsumer } from "./../userThemeContext"

const Main = (props) => (
        <>
        <main className="main"
            buttonstyle={{backgroundColor: props.themeColor}}>
        </main>
        </>
)

export default Main