import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
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
        {/* <label for='farenheit'>Farenheit</label>
        <input 
            type='radio'
            name='farenheit'
        />
        <label for='celcius'>Celcius</label>
        <input 
            type='radio'
            name='celcius'
        /> */}
        <br />
        <br />
        <button>Get Weather</button>
    </form>
);

export default Form; 