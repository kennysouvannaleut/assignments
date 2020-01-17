import React, { Component } from "react"

export default class BadgeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      message: "3",
      onSubmit: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    let nam = event.target.name
    let val = event.target.value
    this.setState({
      [nam]: val
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert()
  }

  render(

  ){
    return (
      <main>
        <form onSubmit={ this.handleSubmit } >
          <input 
            style={{
              width: "150px"
             }}
            type="text"
            name="firstName"
            value={ this.state.firstName }
            placeholder="First Name"
            onChange={ this.handleChange }
        /> 

          <input
            style={{
              width: "150px"
             }}
            type="text"
            name="lastName"
            value={ this.state.lastName }
            placeholder="Last Name"
            onChange={ this.handleChange }
        />
        <br />

          <input 
            style={{
              width: "150px"
             }}
            type="email"
            name="email"
            value={ this.state.email }
            placeholder="Email"
            onChange={ this.handleChange }
        />

          <input 
            style={{
              width: "150px"
             }}
            type="text"
            name="placeOfBirth"
            value={ this.state.placeOfBirth }
            placeholder="Place of Birth"
            onChange={ this.handleChange }
        />
        <br />

          <input 
            style={{
              width: "150px"
             }}
            type="tel"
            name="phone"
            value={ this.state.phone }
            placeholder="Phone"
            onChange={ this.handleChange }
            pattern="^-?[0-9]\d*\.?\d*$"
        />

          <input
            style={{
              width: "150px"
             }}
            type="text"
            name="favoriteFood"
            value={ this.state.favoriteFood }
            placeholder="Favorite Food" 
            onChange={ this.handleChange }
        />
        <br />

          <input 
            style={{ 
              width: "300px", 
              height: "80px"
             }}
            value="Tell us about yourself"
            onChange={ this.handleChange }
        />    
        <br />
          
        <button>Submit</button>
        </form>
        <hr />
          <h2>Badge</h2>
          <p>Name: { this.state.firstName } { this.state.lastName }</p>
          <p>Place of Birth: { this.state.placeOfBirth }</p>
          <p>Email: { this.state.email }</p>
          <p>Phone: { this.state.phone }</p>
          <p>Favorite Food: { this.state.favoriteFood }</p>

      </main>
    )
  }
}