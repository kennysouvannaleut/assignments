import React, { useState } from 'react';
import { TMDB_SEARCH_URL, TMDB_API_KEY } from '../../utils/config';
import CardList from './CardList';
import SearchInput from './SearchInput';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function SearchMovie() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setQuery(e.target.value);
    };
    
    const searchMovieDb = async (e) => {
        e.preventDefault();
        setQuery('');

        const apiEndpoint = `${TMDB_SEARCH_URL}api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            setLoading(true);
            const res = await fetch(apiEndpoint);
            const data = await res.json();
            console.log(data);
            setMovies([
                movies, 
                ...data.results
            ])
            setLoading(false);
        } catch(err) {  
            console.error(err);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='search-container'>
                <SearchInput 
                    input={ query }
                    handleChange={ handleChange }
                    btnText='clear'
                />
                <Button  
                    icon={ <SearchOutlined /> } 
                    onClick={ searchMovieDb }
                    > Search
                </Button>
            </div>

            <div className='card-list'>
                { movies.filter(movie => movie.poster_path).map(movie => (
                    <CardList
                        key={ movie.id } 
                        movie={ movie }
                    />
                ))}
                { loading && <div className='loader'>Loading...</div> }
            </div>
        </div>
    )
};
