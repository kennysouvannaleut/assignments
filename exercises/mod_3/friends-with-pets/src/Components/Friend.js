import React from "react"

function Friend(props) {
    
    return (
        <div className = "Friend" >
            { { color: "red" } } > Name: { props.friend.name }
            { { color: "blue" } } > Age: { props.friend.age }
        </div>
    )
}

export default Friend