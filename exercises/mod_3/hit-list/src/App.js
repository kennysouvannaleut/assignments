import React, { Component } from "react"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      targets: []
    }
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true
    })
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
    .then(response => response.json()) 
    .then(data => {
      // console.log(data)
      this.setState({
        isLoading: false,
        targets: data
      })
    })

    componentDidUpdate = () => {
      
    }

  }
    render() {
      let text = this.state.isLoading ? "Loading..." : this.state.targets.name

      return (
        <header>
          <p>{ text }</p>
        </header>
      )
    }
}