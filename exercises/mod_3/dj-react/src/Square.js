import React from "react"

export default class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            colors: ["white", "white", "white", "white"] 
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = () => {
        this.setState(prevState => {
            return {
                colors: prevState.colors = "blue"
            }
        })
    }
    render() {
        return (
            <button 
                className="square" 
                // onClick = {this.handleClick} >
                onClick={() => this.onClick()} >
                {this.state.colors.map((color, index) => <div key={color.color + index}></div>)}
                {/* <Square color={this.state.colors[0]}/> */}
                {/* <Square color={this.state.colors[1]}/> */}
                {/* <Square color={this.state.colors[2]}/> */}
                {/* <Square color={this.state.colors[3]}/>  */}
            </button>
        )
    }
}

