import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class ThemeProvider extends Component {
    state = {
        theme: true
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: !prevState.theme 
            }
        })
    }

    render() {
        const { theme } = this.state
        return (
            <Provider value={{ theme, toggleTheme: this.toggleTheme }}>
                { this.props.children }
            </Provider>
        )
    }
}

export { ThemeProvider, Consumer as ThemeConsumer }