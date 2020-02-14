import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&apikey="+key';
// const API_KEY = 'b389f068ef3425ee9bec50d5a6d6712d';
// https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&units=metric&apikey=b389f068ef3425ee9bec50d5a6d6712d'

export const Forecast = () => {
    const [weatherId, setWeatherId] = useState(0);
    const [data, setData] = useState({});
    // const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // axios
        //     .get('https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&units=metric&apikey=b389f068ef3425ee9bec50d5a6d6712d')
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
                const response = await axios('https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&units=metric&apikey=b389f068ef3425ee9bec50d5a6d6712d');
                setData(response.data);
                // const response = await fetch(url);
                // const data = await response.json();
            } catch(error) {
                setIsError(true);
            }
            
            setIsLoading(false);
        };

        fetchData();
        }, [weatherId]);

    return ( 
        <div>
            {/* <ul>{data.map(obj => (
                <li key={obj.id}>{obj.main}</li>
                ))}
            </ul> */}
            {/* <h2>Find Current Weather Conditions</h2>
            <div>{ response.obj }</div>
            <button onClick={ getForecast }>Get Forecast</button> */}
            { data, isLoading, isError }
            <button onClick={ () => setWeatherId(weatherId + 1) }>Search by City</button>
            { isLoading ? <div>...loading</div> : <div>{ data.name }</div> }
        </div>
     );
};
 
export default Forecast;