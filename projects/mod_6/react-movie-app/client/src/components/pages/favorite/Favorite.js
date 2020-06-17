import React, { useEffect, useState, useContext } from 'react';
import axios from '../../../utils';
import UserContext from '../../../context/userContext';
import { TMDB_IMAGE_URL, POSTER_SIZE } from '../../../utils/config';
import { Typography, Popover, Button } from 'antd';
import './favorite.css';

const { Title } = Typography;

export default function Favorite() {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(UserContext);
    
    let options = { userInfo: user._id };

    useEffect(() => {
        getFavoriteList()
    }, []);

    const getFavoriteList = () => {
        axios.post('/api/favorites/list', options)
            .then(res => {
                if (res.data.success) {
                    setFavorites(res.data.results);
                    setLoading(false);
                } else {
                    console.log('Error while getting list');
                }
            })
        };

    const deleteFavorites = (movieId, userInfo) => {
        const options = {
            movieId: movieId,
            userInfo: userInfo
        };

        axios.post('/api/favorites/delete', options)
            .then(res => {
                if (res.data.success) {
                    getFavoriteList();
                } else {
                    console.log('Error while removing item.');
                }
            })
        };

        const renderFavorites = favorites.map((favorite, i) => {
        const content = (
            <div>
                { favorite.moviePost ?
                    <img 
                        src={`${TMDB_IMAGE_URL}${POSTER_SIZE}${favorite.moviePost}`} 
                        alt={ favorite.title } 
                    />
                    : 'no image' 
                }
            </div>
        );
            return <tr key={i}>
            <Popover content={ content } title={`${favorite.movieTitle}`}>
                <td>{ favorite.movieTitle }</td>
            </Popover>

            <td>{ favorite.movieRuntime } mins</td>
            <td>
                <Button onClick={() => deleteFavorites(favorite.movieId, favorite.userInfo)} 
                    > Remove
                </Button>
            </td>
        </tr>
    });

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2}>My List</Title>

            <hr />
                { loading && <div>Loading...</div> }
                <table>
                    <thead>
                        <tr>
                            <th>Movie Title</th>
                            <th>Movie Runtime</th>
                            <td>Remove from list</td>
                        </tr>
                    </thead>
                    <tbody>
                        { renderFavorites }
                    </tbody>
                </table>
        </div>
    )
};
