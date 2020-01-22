import React, { Component } from "react"

const URL = "https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      data: []
    }
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true
    })
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({
          isLoading: false,
          data: data
        })
     })
  }
  
  render() {
    const text = this.state.isLoading ? "Loading..." : this.state.data.name
    const hitlist = this.state.data.map((list, key) => <div>
      <h3>{list.name}</h3> <image>{list.image}</image>
  </div>
    )
    return (
      <div className="container">
        {/* { this.state.data.map((hitlist, key) => <h3 style={ styles.headerText }>{ hitlist.name }: { hitlist.image }</h3>) } */}
        <p>{ text }</p>
        <ul style={ styles.headerText }>{ hitlist }</ul>
      </div>
    )}
} 

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  headerText: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
}