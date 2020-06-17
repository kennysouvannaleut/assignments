import React from 'react';
import { Descriptions } from 'antd';

const MovieCard = ({ movie }) => (
    <Descriptions title='Movie Card' bordered>
        <Descriptions.Item label='title'>{ movie.title }</Descriptions.Item>
        <Descriptions.Item label='genre'>{ movie.genres[0].name }</Descriptions.Item>
        <Descriptions.Item label='status'>{ movie.status }</Descriptions.Item>
        <Descriptions.Item label='release_date'>{ movie.release_date }</Descriptions.Item>
        <Descriptions.Item label='language'>{ movie.spoken_languages[0].name }</Descriptions.Item>
        <Descriptions.Item label='runtime'>{ movie.runtime }</Descriptions.Item>
        <Descriptions.Item label='budget'>{ movie.budget }</Descriptions.Item>
        <Descriptions.Item label='revenue'>{ movie.revenue }</Descriptions.Item>
        <Descriptions.Item label='popularity'>{ movie.popularity }</Descriptions.Item>
        <Descriptions.Item label='vote_average' span={ 3 }>{ movie.vote_average }</Descriptions.Item>
        <Descriptions.Item label='vote_count'>{ movie.vote_count }</Descriptions.Item>
    </Descriptions>
);

export default MovieCard;
