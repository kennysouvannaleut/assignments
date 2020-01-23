import React from "react"
import vacationSpots from "./vacationSpots"
import Spots from "./Components/Spots"

const App = () => {

    let spots = vacationSpots.map(place => <Spots spot={place} />)
    
    return (
        <div>
            {spots}
        </div>
    )
}

export default App