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
      .then((res) => {
        // console.log(res)
        this.setState({
          isLoading: false,
          data: res
        })
     })
  }
  
  render() {
    const text = this.state.isLoading ? "Loading..." : this.state.data.name
    const hitlist = this.state.data.map((list, key) => 
      <div>
        <h3>{ list.name }</h3> 
        <img className="image" src={ list.image } alt="" />
      </div> 
    )

    return (
      <div className="container">
          <div className="grid">
            <div className="cell">
        {/* { this.state.data.map((hitlist, key) => <h3 style={ styles.headerText }>{ hitlist.name }: { hitlist.image }</h3>) } */}
        <p>{ text }</p>
        <ul>{ hitlist }</ul>
          </div>
        </div>
      </div>
    )}
} 

// const styles = {
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
//   headerText: {
//     fontSize: 16,
//     textAlign: "center",
//     margin: 10,
//     fontWeight: "bold"
//   },
// }