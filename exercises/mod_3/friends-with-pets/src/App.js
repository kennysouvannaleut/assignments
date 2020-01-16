import React from "react"
import Friend from "./Components/Friend"
import Pet from "./Components/Pet"
import FriendList from "./Components/FriendList"

function App() {
    const displayFriends = FriendList.map( ( friend, index ) =>
        <div key = { friend.name + index } >
            <h1> { friend.name } - ( { friend.age } ) </h1>
        </div>
    )

    const petsList = FriendList.reduce( ( p, { pets, breed } ) => p.concat( [ { breed } ], pets ), [] )

    const displayPets = petsList.map(pet =>
        <div>
            <h2> { pet.name } - ( { pet.breed } ) </h2>
        </div>
    )

    return (
        <div className = "App" >
            { displayFriends }
            { displayPets }
            {/* <Friend /> */}
            {/* <Pet /> */}
        </div>
    )
}

export default App