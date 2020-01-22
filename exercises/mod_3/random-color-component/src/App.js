import React, { Component } from "react"
import axios from "axios"

const URL = "http://www.colr.org/color/random"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: ""
    }
  }

  componentDidMount = () => {
    axios.get(URL)
    .then(res => {
      this.setState({
        color: res.data
      })
    })
  }

  render() {

    return (
      <div> 
        <content>style={{backgroundColor: this.state.color}}</content> 
      </div>
  )}
}
