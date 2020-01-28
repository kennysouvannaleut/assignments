import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class UserContextProvider extends Component {
    state = {
        uglyThings: []
    }

    updatedUglyThing = () => {
        this.setState({ uglyThings })
    }

    render(){
        const { uglyThings } = this.state
        return (
            <Provider value={{ uglyThings,  updatedUglyThing: this.updatedUglyThing }} >
            { this.props.children }
            </Provider>
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer }