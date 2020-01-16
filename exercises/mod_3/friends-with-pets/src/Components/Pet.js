import React from "react"

function Pet(props) {

    return (
        <div className = "Pet" >
            { { color: "green" } } > Pet Name: { props.pet.name }
            { { color: "orange" } } > Breed: { props.pet.breed }
        </div>
    )
}

export default Pet