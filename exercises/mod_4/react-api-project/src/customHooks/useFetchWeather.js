import { useEffect, useState } from 'react';

export const useFetchWeather = (search) => {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const apiUrl = search && search.length > 0 ?
        `https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&units=metric&apikey=b389f068ef3425ee9bec50d5a6d6712d` :

        fetch(apiUrl)
        .then(res => res.json())
        .then(json => {
            setLoading(false)
            if(json.weather) {
                setWeather(json.weather)
                } else {
                    setWeather({})
            }
        })
        .catch(err => {
            setError(err)
            setLoading(false)
            })
    }, [search])
    return { weather, loading, error }
};