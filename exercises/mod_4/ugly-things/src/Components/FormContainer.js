import React, { Component } from 'react'
import FormComponent from './FormComponent'
import { UserContextConsumer } from './../userContext'

class Form extends Component {
    state = {
        title: '',
        imgURL: '',
        description: '',
        uglyThings: []
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
            const uglyThing = { title, imgURL, description }
            return {
                ...prevState.uglyThings
            }
        })
    }

    render(){
        // console.log(this.state)
        const mappedUglyThings = this.state.uglyThings.map(uglyThing => 
            <>
                <p>Title: { uglyThing.title }</p>
                <p>Img URL: { uglyThing.imgURL }</p>
                <p>Description: { uglyThing.description }</p>
            </>
        )
        return (
            <div>
                { mappedUglyThings }
                <UserContextConsumer>
                    { updatedUglyThing} => (
                        <FormComponent 
                        handleChange={ this.handleChange }
                        handleSubmit={ this.handleSubmit }
                        data={ this.state }
                        />
                        <button onClick={() => updatedUglyThing(this.state.updatedUglyThing)}>Submit</button>
                    )}
                </UserContextConsumer>
            </div>
        )
    }
}

export default Form