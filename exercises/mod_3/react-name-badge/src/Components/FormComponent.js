import React from "react"

const FormComponent = (props) => {
return (
      <main style={ styles.container }>
        <form onSubmit={ props.handleSubmit } >
          <input 
            minLength="3"
            style={ styles.input }
            type="text" required
            name="firstName"
            value={ props.data.firstName }
            placeholder="First Name"
            onChange={ props.handleChange }
        /> 

          <input
            minLength="3" 
            style={ styles.input }
            type="text" required
            name="lastName"
            value={ props.data.lastName }
            placeholder="Last Name"
            onChange={ props.handleChange }
        />
        <br />

          <input
            minLength="3" 
            style={ styles.input }
            type="email" required
            name="email"
            value={ props.data.email }
            placeholder="Email"
            onChange={ props.handleChange }
        />

          <input 
            minLength="3"
            style={ styles.input }
            type="text" required
            name="placeOfBirth"
            value={ props.data.placeOfBirth }
            placeholder="Place of Birth"
            onChange={ props.handleChange }
        />
        <br />

          <input
            minLength="3"
            style={ styles.input }
            type="tel"
            name="phone" required
            value={ props.data.phone }
            placeholder="Phone"
            onChange={ props.handleChange }
            pattern="^-?[0-9]\d*\.?\d*$"
        />

          <input 
            minLength="3" 
            style={ styles.input }
            type="text"
            name="favoriteFood" required
            value={ props.data.favoriteFood }
            placeholder="Favorite Food" 
            onChange={ props.handleChange }
        />
        <br />

          <input 
            minLength="3"
            style={ styles.inputTextArea }
            name="textArea" required 
            value= { props.data.textArea }
            placeholder="Tell us about yourself"
            onChange={ props.handleChange }
        />    
        <br />
          
        {/* <button disabled={!isEnabled } style={ styles.button }>Submit</button> */}
        <button style={ styles.button }>Submit</button>
        </form> 
        <hr />
          <h2 style={ styles.header }>Badge</h2>
          {/* <h3 style={{ color: "red" }}>{ props.data.message.length }</h3> } */}
          {/* {<p style={ styles.paragraph }>Name: { props.data.firstName } { props.data.lastName }</p> */}
          {/* <p style={ styles.paragraph }>Place of Birth: { props.data.placeOfBirth }</p> */}
          {/* <p style= { styles.paragraph }>Email: { props.data.email }</p> */}
          {/* <p style= { styles.paragraph }>Phone: { props.data.phone }</p> */}
          {/* <p style= { styles.paragraph }>Favorite Food: { props.data.favoriteFood }</p> */}
          {/* <p style={ styles.about }>{ props.data.textArea }</p> */}

      </main>
    )
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

 export default FormComponent