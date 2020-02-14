import React from 'react';

const Form = props => (

    <form onSubmit={ props.data }>
        <input 
            type='text'
            name='city'
            placeholder='City...'
            maxLength='25'
            value={ props.city } 
            onChange={(e) => props.setCity(e.target.value)}
        />
        <input 
            type='text'
            name='country'
            placeholder='Country...'
            maxLength='25'
            value={ props.country } 
            onChange={(e) => props.setCountry(e.target.value)}
        />

        <label>
        <input 
            type='radio'
            name='unit'
            checked={ props.unit === 'metric' }
            value='metric' 
            onChange={(e) => props.setUnit(e.target.value)}
        />
            Fahrenheit
        </label>

        <label>
        <input 
            type='radio'
            name='unit'
            checked={ props.unit === 'metric' }
            value='metric' 
            onChange={(e) => props.setUnit(e.target.value)}
        />
            Celcius
        </label>

        <button>Get Weather</button>
    </form>
);

export default Form;