import React from 'react'

const FormComponent = (props) => {
    return (
        <main style={ styles.container } >
            <form onSubmit={ props.handleSubmit } >
                <input 
                    style={ styles.container }
                    type='text' required
                    name='title'
                    value={ props.data.title }
                    placeholder='Title'
                    onChange={ props.handleChange }
                />

                <input
                    style={ styles.container }
                    type='img'
                    name='imgUrl'
                    value={ props.data.imgURL }
                    placeholder="Img URL"
                    onChange={ props.handleChange }
                />

                <input 
                    style={ styles.container }
                    type='text'
                    name='description'
                    value={ props.data.description }
                    placeholder='Description'
                    onChange={ props.handleChange }
                />
                <br />

                <br />
                <button style={ styles.button }>Submit</button>
            </form>

                <hr />
                <h2 style={ styles.header }>The Ugly Things</h2>
                <p style={ styles.paragraph }>Title: { props.data.title }</p>
                <image style={ styles.paragraph }>Img URL: { props.data.imgURL }</image>

        </main>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },

    header: {
        borderWidth: 1,
        margin: 10,
        height: 60,
        paddingTop: 10,
        width: 400,
        fontSize: 26,
        color: 'whitesmoke',
        backgroundColor: '#333333',
        textAlign: 'center',        
    },

    paragraph: {
        padding: 5,
        margin: 10,
        fontSize: 14,
    },

    button: {
        color: 'whitesmoke',
        backgroundColor: '#777',
        margin: 10,
        fontWeight: 150,
        fontSize: 14,
    },
}

export default FormComponent