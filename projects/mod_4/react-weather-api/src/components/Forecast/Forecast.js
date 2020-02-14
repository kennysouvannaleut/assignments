import React, { useEffect, useState } from 'react';
import Conditions from '../Conditions/Conditions';
import axios from 'axios';

export const Forecast = () => {
    const [weatherId, setWeatherId] = useState(0);
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [city, setCity] = useState('');
    // const [url, setUrl] = useState('');
    const [country, setCountry] = useState('')
    const [unit, setUnit] = useState('metric');

    const cityName = encodeURIComponent(city);
    const countryName = encodeURIComponent(country);
    const apiKey = process.env.REACT_APP_API_KEY
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&country=${countryName}&units=${unit}&apikey=${apiKey}`;

    useEffect(() => {
        // axios
        //     .get('')
        //     .then(res => {
        //         console.log(res)
        //         setData(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        // }, []);

        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}${unit}&apiKey=${apiKey}`);
                setData(response.data);

            } catch(error) {
                setIsError(true);
            }
            
            setIsLoading(false);
        };

        fetchData();
        }, [weatherId]);

    return ( 
        <div>
            { data, isLoading, isError }
            <h2>Find Current Weather Conditions</h2>
            {/* <button onClick={() => setWeatherId(weatherId + 1)}>Search by City...</button> */}
            { isLoading ? <div>...loading</div> : <div>{ data.name }</div> }
            <Conditions
                data={ data }
            />
        </div>
     );
};
 
export default Forecast;