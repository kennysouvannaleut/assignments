import React, { Component } from "react"
import { createPortal } from "react-dom"

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
      message: "This field cannot be blank"
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

  canBeSubmitted = () => {
    const { firstName, lastName, phone, placeOfBirth, favoriteFood, email, textArea } = this.state
    return (
      firstName.length > 0 &&  lastName.length > 0 &&  phone.length > 0 &&  placeOfBirth.length > 0 && 
      favoriteFood.length > 0 && email.length > 0 && textArea.length > 0
    )
  }

  handleSubmit = (event) => {
    if(!this.canBeSubmitted()) {
      event.preventDefault()
      return
    }
  }
  
  render(){
    const isEnabled = this.canBeSubmitted()

    return (
      <main style={ styles.container }>
        <form onSubmit={ this.handleSubmit } >
          <input 
            minlength="3"
            style={ styles.input }
            type="text" required
            name="firstName"
            value={ this.state.firstName }
            placeholder="First Name"
            onChange={ this.handleChange }
        /> 

          <input
            minlength="3" 
            style={ styles.input }
            type="text" required
            name="lastName"
            value={ this.state.lastName }
            placeholder="Last Name"
            onChange={ this.handleChange }
        />
        <br />

          <input
            minlength="3" 
            style={ styles.input }
            type="email" required
            name="email"
            value={ this.state.email }
            placeholder="Email"
            onChange={ this.handleChange }
        />

          <input 
            minlength="3"
            style={ styles.input }
            type="text" required
            name="placeOfBirth"
            value={ this.state.placeOfBirth }
            placeholder="Place of Birth"
            onChange={ this.handleChange }
        />
        <br />

          <input
            minlength="3"
            style={ styles.input }
            type="tel"
            name="phone" required
            value={ this.state.phone }
            placeholder="Phone"
            onChange={ this.handleChange }
            pattern="^-?[0-9]\d*\.?\d*$"
        />

          <input 
            minlength="3" 
            style={ styles.input }
            type="text"
            name="favoriteFood" required
            value={ this.state.favoriteFood }
            placeholder="Favorite Food" 
            onChange={ this.handleChange }
        />
        <br />

          <input 
            minlength="3"
            style={ styles.inputTextArea }
            name="textArea" required 
            value= { this.state.textArea }
            placeholder="Tell us about yourself"
            onChange={ this.handleChange }
        />    
        <br />
          
        <button disabled={ !isEnabled } style={ styles.button }>Submit</button>
        </form> 
        <hr />
          <h2 style={ styles.header }>Badge</h2>
          <h3 style={{ color: "red" }}>{ this.state.message.length }</h3>
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
     color: "white",
     backgroundColor: "#777",
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