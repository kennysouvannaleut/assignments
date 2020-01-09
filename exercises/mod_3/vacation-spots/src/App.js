import React from "react"
import Vacation from "./Vacation"
import vacationSpots from "./vacationSpots"

function App() {
    const vacationComponents = vacationSpots.map(place => <Vacation vacation={place}/>)

    return(
        <div>
            {vacationComponents}
        </div>
    )
}

export default App