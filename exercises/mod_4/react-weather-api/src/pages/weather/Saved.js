import React from 'react'

const Saved = props => (
    <div>
        {props.cod === 200 ? 
        <div>
            <p><strong>{props.name}</strong></p>
            <p>It's currently {Math.round(props.temp)} degrees out 
            with {props.description[0]}.</p>
            </div>
            : null
            }
    </div>
);

export default Saved;