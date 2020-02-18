import React from 'react';

const Weather = ({city, country, description, temperature, error}) => (
    <div>
        {city && country && <p>{city}, {country}</p>}
        {temperature && <p>{temperature}</p>}
        {description && <p>{description}</p>}
        {error && <p>{error}</p>}
    </div>
);

export default Weather;