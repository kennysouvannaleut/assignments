import React from "react"

function Friend(props) {
    return (
        <div className = "friendContainer">
            <h2 style={{color: "red"}}> Name: {props.friend.name}</h2>
            <h3 style={{color: "blue"}}> Age: {props.friend.age}</h3>
        </div>
    )
}

export default Friend