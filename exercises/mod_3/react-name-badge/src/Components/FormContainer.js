import React, { Component } from "react"
import FormComponent from "./FormComponent"

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      textArea: "",
      // message: "This field cannot be blank",
      badges: []
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
    event.preventDefault()
    // if(!this.canBeSubmitted()) {
    //     }
      this.setState(prevState => {
        const { firstName, lastName, phone, placeOfBirth, favoriteFood, email, textArea } = prevState
        const updatedBadge = { firstName, lastName, phone, placeOfBirth, favoriteFood, email, textArea }
          return {
            badges: [ ...prevState.badges, updatedBadge ]
          }
        }
      )
  }

  render() {
      // console.log(this.state)
      const mappedBadges = this.state.badges.map(badge => 
         <>
          <p>Name: { badge.firstName } { badge.lastName}</p>
          <p>Phone: { badge.phone }</p>
          <p>Email: { badge.email }</p>
          <p>Place of Birth: { badge.placeOfBirth }</p>
          <p>Favorite Food: { badge.favoriteFood }</p>
             Comment: { badge.textArea } 
        </>
        )
        return (
          <>
          {mappedBadges}
          <FormComponent
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            data={ this.state }
          />
          </>
       )
     }
 }
  
      