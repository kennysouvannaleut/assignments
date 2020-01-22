import React, { Component } from "react"
import axios from "axios"

const URL = "http://www.colr.org/json/color/random"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount = () => {
    axios.get(URL)
    .then(res => {
      const { colors } = res.data
      // console.log(colors[0].hex)
      this.setState({
        color: colors[0]
      })
    })
  }

  handleClick = (evt) => {
    evt.preventDefault()
    const selectColor = ("#"+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6))
    this.setState({
      color: selectColor
    })
  }

  render() {
    // console.log(this.state.color)
    return (
      <div> 
        <h3 style={ {backgroundColor: this.state.color} } onClick={ this.handleClick }>CLICK ME!!!</h3>
      </div>
  )}
}
