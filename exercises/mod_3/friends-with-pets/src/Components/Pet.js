import React from "react"

const Pet = (props) => {
    return (
        <div className = "Pet" >
            Pets Name: <p>{ props.name }</p>           
            Pets Breed: <p>{ props.breed }</p>
        </div>
    )
}

export default Pet