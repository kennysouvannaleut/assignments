import React from "react"

function Card(props){
    return(
        <div>
            <h3 style={{display: !props.place && "blue"}} >{props.place}</h3>
            <p style={{color: "red"}} >Travel Cost: ${props.price}</p>
            <p style={{color: "green"}} >When: {props.timeToGo}</p>
        </div>
    )
}
export default Card