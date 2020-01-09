import React from "react"

function Vacation(props){
    return(
        <div>
            <h2>{props.vacation.place}</h2>
            <p style={{color: "red"}} >Travel Cost: ${props.vacation.price}</p>
            <p style={{color: "green"}} >When: {props.vacation.timeToGo}</p>
        </div>
    )
}
export default Vacation