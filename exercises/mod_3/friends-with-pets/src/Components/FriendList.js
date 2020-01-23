import React from "react"
import Friend from "./Friend"
import friendData from "./../friendData"

const FriendList = () => {
  let displayFriends = friendData.map(friend => <Friend name={ friend.name } age={ friend.age } pets={ friend.pets } 
  /> )
    return (
        <>
          {displayFriends}
        </>
    )
}

export default FriendList