import React, { Component } from "react"

const URL = "https://api.imgflip.com/get_memes"

export default class MemeGenerator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount = () => {
        fetch(URL)
            .then(res => res.json())
            .then(res => {
                const { memes } = res.data
                // console.log(memes[0])
                this.setState({
                    allMemeImgs: memes 
            })
        })
    }

    handleChange = (evt) => {
        const { name, value } = evt.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImg: randomMemeImg
        })

    }

    render(

    ){
        return (
            <div>
                <form className="meme-form" onSubmit={ this.handleSubmit }>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={ this.state.topText }
                        onChange={ this.handleChange }
                    />

                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={ this.state.bottomText }
                        onChange={ this.handleChange }
                    />

                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={ this.state.randomImg } alt="" />
                    <h2 className="top">{ this.state.topText }</h2>
                    <h2 className="bottom">{ this.state.bottomText }</h2>
                </div>
            </div>
        )
    }
}