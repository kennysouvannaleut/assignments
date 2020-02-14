import React from 'react';

const weather = props => (
    <div>
        { props.country && props.city && <p>Location: { props.city }, { props.country }</p>}
        { props.temperature && <p>Temperature: { props.temperature }</p>}
        { props.humidity && <p>Humidity: { props.humidity }</p>}
        { props.description && <p>Description: { props.description }</p>}
        { props.error && <p>{ props.error }</p>}
    </div>
);

export default weather;