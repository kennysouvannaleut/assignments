import React from "react"
import Pet from "./Pet"

const Friend = (props) => {
    const pets = props.pets.map(pet => <Pet name={ pet.name } breed={ pet.breed }
    /> )
    return (
        <div className = "Friend" >
            Friend's Name: <p>{ props.name }</p>
            Friend's age: <p>{ props.age } year's old</p>
           {pets}
           <hr />
        </div>
    )
}

export default Friend