import React from "react"

const Spots = (props) => {

    return (
        <div>
            <h2>{props.spot.place}</h2>
            <p style={ {color: "red"} } >Travel Cost: ${props.spot.price}</p>
            <p style={ {color: "blue"} } >When: {props.spot.timeToGo}</p>
        </div>
    )
}

export default Spots