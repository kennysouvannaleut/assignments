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
      textArea: "",
      message: "3",
      onSubmit: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert()
  }

  render(

  ){
    return (
      <main style={ styles.container }>
        <form onSubmit={ this.handleSubmit } >
          <input required
            style={ styles.input }
            type="text"
            name="firstName"
            value={ this.state.firstName }
            placeholder="First Name"
            onChange={ this.handleChange }
        /> 

          <input
            style={ styles.input }
            type="text"
            name="lastName"
            value={ this.state.lastName }
            placeholder="Last Name"
            onChange={ this.handleChange }
        />
        <br />

          <input
            style={ styles.input }
            type="email"
            name="email"
            value={ this.state.email }
            placeholder="Email"
            onChange={ this.handleChange }
        />

          <input 
            style={ styles.input }
            type="text"
            name="placeOfBirth"
            value={ this.state.placeOfBirth }
            placeholder="Place of Birth"
            onChange={ this.handleChange }
        />
        <br />

          <input
            style={ styles.input }
            type="tel"
            name="phone"
            value={ this.state.phone }
            placeholder="Phone"
            onChange={ this.handleChange }
            pattern="^-?[0-9]\d*\.?\d*$"
        />

          <input 
            style={ styles.input }
            type="text"
            name="favoriteFood"
            value={ this.state.favoriteFood }
            placeholder="Favorite Food" 
            onChange={ this.handleChange }
        />
        <br />

          <input 
            style={ styles.inputTextArea }
            name="textArea"
            value= { this.state.textArea }
            placeholder="Tell us about yourself"
            onChange={ this.handleChange }
        />    
        <br />
          
        <button style={ styles.button }>Submit</button>
        </form> 
        <hr />
          <h2 style={ styles.header }>Badge</h2>
          <p style={ styles.paragraph }>Name: { this.state.firstName } { this.state.lastName }</p>
          <p style={ styles.paragraph }>Place of Birth: { this.state.placeOfBirth }</p>
          <p style= { styles.paragraph }>Email: { this.state.email }</p>
          <p style= { styles.paragraph }>Phone: { this.state.phone }</p>
          <p style= { styles.paragraph }>Favorite Food: { this.state.favoriteFood }</p>
          <p style={ styles.about }>{ this.state.textArea }</p>

      </main>
    )
  }
}

 const styles = {
   container: {
     flex: 1,
     backgroundColor: "#fff",
     alignItems: "center",
     justifyContent: "center",
   },

   input: {
     borderWidth: 1,
     borderColor: "#777",
     padding: 8,
     margin: 10,
     width: 200,
   },

   inputTextArea: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 420,
    height: 80,
   },

   button: {
     backgroundColor: "#fff",
     margin: 10,
     fontWeight: 150,
     fontSize: 18,
   }, 

   header: {
     borderWidth: 1,
     margin: 10,
     height: 60,
     paddingTop: 10,
     width: 420,
     fontSize: 30,
     color: "white",
     backgroundColor: "grey",
     textAlign: "center",
   },

   about: {
    border: "1px solid",
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 420,
    height: 80,
    fontSize: 14,
    color: "black",
   },

   paragraph: {
    padding: 5,
    margin: 10,
    fontSize: 14,
   },

 }