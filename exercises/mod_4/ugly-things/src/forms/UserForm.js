import React from 'react'

const UserForm = (props) => (
    <div>
        <form className='uglyThingsForm' onSubmit={ props.handleSubmit }>
            <input
                type='text'
                name='title'
                placeholder='Title'
                value={ props.data.title }
                onChange={ props.handleChange }
            />

            <input
                type='text'
                name='imgUrl'
                placeholder='Img URL'
                value={ props.data.imgUrl }
                onChange={ props.handleChange }
            />

            <input 
                type='text'
                name='description'
                placeholder='Description'
                value={ props.data.description }
                onChange={ props.handleChange }
            />
            <br />

            <button>Submit</button>
        </form>
        <div className='uglyThings'>
            <h2 className='title'>{ props.title }</h2>
            <img src={ props.imgUrl } alt='' />
            <p className='description'>{ props.description }</p>
        </div>
    </div>
)

export default UserForm