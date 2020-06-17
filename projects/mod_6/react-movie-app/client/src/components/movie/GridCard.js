import React from 'react';
import { Col } from 'antd';
import { TMDB_IMAGE_URL, POSTER_DEFAULT_SIZE } from '../../utils/config';

const GridCard = props => {
    let { 
        image, 
        movieId, 
        movieName, 
        actor, 
        characterName 
    } = props;

    if (actor) {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <img 
                        style={{ width: '175px', height: '320px' }} 
                        src={`${TMDB_IMAGE_URL}${POSTER_DEFAULT_SIZE}${image}`}
                        alt={ characterName } 
                    />
                </div>
            </Col>
        )
    } else {    
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${movieId}`}>
                        <img 
                            style={{ width: '100%', height: '320px' }}
                            alt={ movieName } src={ image } 
                        />
                    </a>
                </div>
            </Col>
        )
    }
};

export default GridCard;
