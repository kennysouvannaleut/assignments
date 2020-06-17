import React from 'react';
import { TMDB_IMAGE_URL, IMAGE_DEFAULT_SIZE } from '../../utils/config';
import { Typography } from 'antd';

const { Title } = Typography;

const MovieCard = ({ movie }) => (
    <div className='card'>
        <img className='card-image'
            src={`${TMDB_IMAGE_URL}${IMAGE_DEFAULT_SIZE}${movie.poster_path}`}
            alt={ movie.title + ' poster' }
        />

        <div className='card-content'>
            <Title 
                level={ 3 } 
                className='card-title'>
                { movie.title }
            </Title>
            <p><small>Release_Date: { movie.release_date }</small></p>
            <p><small>Rating: { movie.vote_average }</small></p>
            <p className='card-description'>{ movie.overview }</p>
        </div>
    </div>
);

export default MovieCard;
