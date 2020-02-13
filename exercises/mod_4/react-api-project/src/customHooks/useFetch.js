import { useState, useEffect } from 'react';

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const [user] = data.results;
        setData(user);
        setLoading(false);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return { data, loading };
};

export default useFetch;