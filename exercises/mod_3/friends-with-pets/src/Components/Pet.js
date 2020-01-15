import React from "react"

function Pet(props) {
    return (
        <div className = "petsContainer">
            <h2 style={{color: "green"}}> Name: {props.pet.name}</h2>
            <h3 style={{color: "purple"}}> Breed: {props.pet.breed}</h3>
        </div>
    )
}

export default Pet