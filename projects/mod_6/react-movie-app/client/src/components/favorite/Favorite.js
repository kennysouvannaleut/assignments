import React, { useEffect, useState } from 'react';
import axios from '../../utils';
import { Button } from 'antd';

export default function Favorite(props) {
    const movieId = props.movieId;
    const userInfo = props.userInfo;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRuntime = props.movieInfo.runtime;

    const [favorites, setFavorites] = useState(0);
    const [hasFavorited, setHasFavorited] = useState(false);

    const options = {
        movieId: movieId,
        userInfo: userInfo,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRuntime: movieRuntime
    };

    const handleFavorites = () => {
        if (hasFavorited) {
            axios.post('/api/favorites/delete', options)
                .then(res => {
                    if (res.data.success) {
                        setFavorites(favorites - 1)
                        setHasFavorited(!hasFavorited)
                    } else {
                        console.log('Oops, something went wrong.');
                    }
                })

        } else {
            axios.post('/api/favorites/favorited', options)
                .then(res => {
                    if (res.data.success) {
                        setFavorites(favorites + 1)
                        setHasFavorited(!hasFavorited)
                    } else {
                        alert('Oh no! something went wrong again.');
                    }
                })
             }
        };

    useEffect(() => {

        axios.post('/api/favorites/show_favorites', options)
            .then(res => {
                if (res.data.success) {
                    setFavorites(favorites);
                } else {
                    console.log('Nothing in favorites.');
                }
            })

        axios.post('/api/favorites/list', options)
            .then(res => {
                if (res.data.success) {
                    setFavorites(favorites);
                } else {
                    console.log('list is empty.');
                }
            })
    }, []);

    return (
        <>
            <Button onClick={ handleFavorites }> 
                { !hasFavorited ? 'Add' : 'Remove' }
            </Button>
        </>
    );
};
