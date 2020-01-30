import React, { Component, createContext } from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
    state = {  
        isDeleted: false
    }
    toggleDelete = () => {
        this.setState({ isDeleted: !this.state.isDeleted });
    }
    render() { 
        return (  
            <UserContext.Provider value={{...this.state, toggleDelete: this.toggleDelete }}>
                { this.props.children }
            </UserContext.Provider>
        );
    }
}
 
export default UserContextProvider;