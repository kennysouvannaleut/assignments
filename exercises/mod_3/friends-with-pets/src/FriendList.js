import React from "react"
import Friend from "./Components/Friend"
import Pet from "./Components/Pet"
import friends from "./friends"
import pets from "./pets"

function FriendList() {
    const friendComponents = friends.map(friend => <Friend friend={friend}/>)
    const petComponents = pets.map(pet => <Pet pet={pet}/>)
    return(
        <div className="mainDiv">
            {friendComponents}
            {petComponents}
        </div>
    )
}

export default FriendList
