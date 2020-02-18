import React from 'react';

const conditions = props => (
    <div>
        { props.cod === 200 ? 
        <div>
            <p><strong>{ props.name }</strong></p>
            <p>It is currently { Math.round(props.temp) } degrees out with { props.weather[0].description }.</p>
        </div>
        : null
        }
    </div>
);

export default conditions;