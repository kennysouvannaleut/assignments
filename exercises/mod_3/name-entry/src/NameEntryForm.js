import React, { Component } from "react"

export default class NameEntryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
                listOfNames: []             
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = () => {
        this.setState(prevState => {
            const updatedNames = prevState.listOfNames.map(name => {
                return [
                    {}, 
                    ...updatedNames
                ]
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        { this.handleChange }
    }

    render() {
        const namesList = this.state.listOfNames.map(name => <div name>{ name }</div>)

        return (
            <main style={ styles.container } >
                <form onSubmit={ this.handleSubmit } >
                    <input required
                        style={ styles.input } 
                        type="text"
                        name="listOfNames"
                        value={ this.state.listOfNames }
                        placeholder="Full Name"
                        onChange={ this.handleChange }
                    />
                <button style={ styles.button }>Submit</button>
                </form>
                <hr />
                <h1 style={ styles.header }>List of Names:</h1>
                <ul>
                    <li>{ this.state.list } { namesList }</li>
                </ul>

            </main>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    input: {
        borderwidth: 1,
        borderColor: "#777",
        padding: 8,
        margin: 10,
        width: 200,
    },

    button: {
        backgroundColor: "#fff",
        color: "maroon",
        margin: 10,
        fontWeight: 150,
        fontSize: 18,
    },

    header: {
        borderWidth: 1,
        margin: 10,
        paddingTop: 5,
        width: 300,
        color: "white",
        backgroundColor: "grey",
        textAlign: "center",
    },

    list: {
        padding: 5,
        margin: 10,
        fontSize: 13,
    },

}
