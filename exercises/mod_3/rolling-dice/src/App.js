import React, { Component } from "react"
import DiceBox from "./DiceBox"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfDice: 0,
            rolls: [],
            rollCount: 0
        }
    }

    diceRoll = numberOfDice => {
        let rolls = []
        let rollCount = 0
        for(let i = 0; i < numberOfDice; i++) {
            rolls[i] = ( Math.floor( Math.random() * 6) + 1)
            rollCount += rolls[i]
        }

        this.setState({
            numberOfDice,
            rolls,
            rollCount
        })
    }

    render() {
        return (
            <div className = "App" >
                <h2> Roll that Dice!!! </h2>
                <span className = "Count" > Roll Counts: </span>
                { this.state.rollCount }
        
            <div className = "Buttons" >
                { [ 1, 2, 3, 4, 5 ].map(number => {
                let text = number === 1 ? "Die" : "Dices"
                    return (
                    <button key = { number }
                        onClick = { () => this.diceRoll(number) }
                        className = "Button" >
                        { number } { text }
                        {/* <DiceBox /> */}
                    </button>
                    )}
                )}
            </div>
        </div>
    )}
}