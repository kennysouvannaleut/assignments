import React, { Component } from "react"

export default class NameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
                listNames: []         
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (event, index) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            listNames: this.state.listNames.map((person, nameIndex) => {
                if(nameIndex === index) {
                    return {
                        ...person,
                        [name]: value
                    }
                }
                return person
            })
        })
    }

    handleSubmit = (event) => {
        this.handleChange()
        event.preventDefault()
    }

    render(){

        return (
            <main style={ styles.container } >
                <form onSubmit={ this.handleSubmit } >
                    <label>
                        Name:
                    <input
                        style={ styles.input } 
                        type="text"
                        name="listNames"
                        value={ this.state.listNames }
                        onChange={ this.handleChange }
                    />
                    </label>
                <button style={ styles.button }>Submit</button>
                </form>
                <hr />
                <h1 style={ styles.header }>List of Names:</h1>
                <ul style={ styles.list }>{ this.state.listNames }</ul>

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
