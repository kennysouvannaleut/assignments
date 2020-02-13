import { useEffect, useState } from 'react';
import axios from 'axios';

export const useWeatherApi = () => {
    const [weatherId, setWeatherId] = useState(0);
    const [data, setData] = useState({});
    const [url, setUrl] = useState('https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&units=metric&apikey=b389f068ef3425ee9bec50d5a6d6712d');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(url);

                setData(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return (
        <>
            [{ data, isLoading, isError }, setUrl]
            <button onClick={() => setWeatherId(weatherId + 1)}>Search by City</button>
            { isLoading ? <div>...loading</div> : <div>{ data.name }</div> }
        </>
    );
};

export default useWeatherApi;