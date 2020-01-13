import React, {Component} from "react"
import Color from "./Color"

class App extends Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = () => {
        this.setState(prevState => {
            return {
                color: prevState.color = ""
            }
        })
    }

    render() {

        // const styles = {
        //     color: "white",
        //     backgroundColor: "red",
        //     fontSize: "24px"
        // }

        // let squareColors
        // if(styles.color === "white") {
        //     squareColors = styles.color='black'
        // } else {
        //     squareColors = styles.color='white'
        // }

        return (
            <div>
                {this.state.colors.map((color, index) => <Color key={index} colors={color}/>)}
                
                {/* <button style={styles}>Click Here</button> */}
                <button onClick={this.handleChange}>Click Me!</button>
                <button onClick={this.handleChange}>Click Me!</button>
                <button onClick={this.handleChange}>Click Me!</button>
                <button onClick={this.handleChange}>Click Me!</button>
            </div>
        )
    }
}

export default App

