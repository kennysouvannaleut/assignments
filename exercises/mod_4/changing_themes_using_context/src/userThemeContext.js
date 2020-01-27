import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()

class ThemeProvider extends Component {
    state = {
        theme: "dark"
    }

    changeTheme = (theme) => {
        this.setState({
            theme
        })
    }

    render() {
        const { theme } = this.state
        return (
                <Provider value={{ theme, changeTheme: this.changeTheme }}>
                    { this.props.children }
                </Provider>
        )
    }
}

export { ThemeProvider, Consumer as ThemeConsumer }