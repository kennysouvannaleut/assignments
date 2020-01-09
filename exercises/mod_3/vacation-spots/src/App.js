import React from "react"

import Card from "./Components/Card"
import vacationSpots from "./vacationSpots"

function App(){
    const mappedSpots = vacationSpots.map(spot => <Card place={spot.place} price={spot.price} timeToGo={spot.timeToGo}/>)
    return(
        <div>
            <h2 style={{textDecoration: "underline"}} >Vacation Spots:</h2>
            {mappedSpots}
        </div>
    )
}

export default App