import React from 'react';

const conditions = props => (
    <div>
        { props.data.cod === 200 ? 
        <div>
            <p><strong>{ props.data.name }</strong></p>
            <p>It is currently { Math.round(props.data.main.temp) } degrees out with { props.data.weather[0].description }.</p>
        </div>
        : null
        }
    </div>
);

export default conditions;