import React from "react"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Button from "./Components/Button"
import Footer from "./Components/Footer"
import { ThemeProvider }  from "./userThemeContext"

const App = () => (
  <div>
      <Navbar />
      <Main />
      <ThemeProvider />
      <Button />
      <Footer />
  </div>
)

export default App