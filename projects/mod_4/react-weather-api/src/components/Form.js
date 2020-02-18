import React from 'react';

const Form = props => (
    <form onSubmit={props.getForecast}>
        <input 
            type='text'
            name='city'
            placeholder='City...'
            maxLength='30'
        />
        <input 
            type='text'
            name='country'
            placeholder='Country...'
            maxLength='30'
        />
        <button>Get Forecast</button>
    </form>
)

export default Form;