import React, { Component } from 'react'

// const { Provider, Consumer } = React.createContext()

class UserContextProvider extends Component {
    state = {
        uglyThing: []
    }

    changeUglyThing = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            const { uglyThing } = prevState
            const updatedUglyThing = { uglyThing }
            return {
                uglyThing: [...prevState.uglyThing, updatedUglyThing]
            }
        })
    }

    render() {
        const { uglyThing } = this.state
        return (
            <Provider value={{ uglyThing, changeUglyThing: this.changeUglyThing }} >
                { this.props.children }
            </Provider>
        )
    }
}

// export { UserContextProvider, Consumer as UserContextConsumer }