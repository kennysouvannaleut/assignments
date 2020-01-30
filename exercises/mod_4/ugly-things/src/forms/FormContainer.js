import React, { Component } from 'react'
// import UserForm from './UserForm'
// import { UserContextConsumer } from './userContext'

class Form extends Component {
    state = {
        title: '',
        imgUrl: '',
        description: '',
        newUglyThing: []
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            const { title, imgURL, description } = prevState
            const updatedUglyThing = { title, imgURL, description }
            return {
                newUglyThing: [...prevState.newUglyThing, updatedUglyThing]
            }
        })
    }

    render() {
        const mappedUglyThings = this.state.newUglyThing.map(uglyThing => 
            <>
                <p>Title: { uglyThing.title }</p>
                <p>Img URL: { uglyThing.imgUrl }</p>
                <p>Description: { uglyThing.description }</p>
            </>
        )
        return (
            <div>
                { mappedUglyThings }
                <UserContextConsumer>
                    {( { changeUglyList, uglyThing })  => (
                        <UserForm
                            handleChange={ this.handleChange }
                            handleSubmit={ this.handleSubmit }
                            data={ this.state }
                            />
                        )}
                </UserContextConsumer>
            </div>
        )
    }
}

export default Form