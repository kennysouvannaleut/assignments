import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const APIWeatherContext = createContext();

// const URL = 'https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&apikey="+key';

const APIWeatherContextProvider = (props) => {
    const [data, setData] = useState({});
    
    useEffect(() => {
        axios
            .get('https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&units=metric&apikey=b389f068ef3425ee9bec50d5a6d6712d')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <div>
            <APIWeatherContext.Provider value={{ data }} >
                { props.children }
            </APIWeatherContext.Provider>
            {/* <ul>
                { data.map(obj => (
                    <li key={ obj.id } >{ obj.main }</li>
                    ))}
            </ul> */}
        </div>
    );
}

export default APIWeatherContextProvider;

