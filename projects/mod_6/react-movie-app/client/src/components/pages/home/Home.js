import React, { useEffect, useRef, useState, Fragment } from 'react';
import { 
    TMDB_BASE_URL, 
    TMDB_IMAGE_URL, 
    POSTER_SIZE,
    BACKDROP_SIZE
} from '../../../utils/config';
import ImageCard from '../../movie/ImageCard';
import GridCard from '../../movie/GridCard';
import { Typography, Row } from 'antd'; 

const { Title } = Typography;

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [movieImage, setMovieImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const btnRef = useRef(null);

    useEffect(() => {
        
        const apiReq = (
            `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`);

            getPopMovies(apiReq);
    }, []);

    const getPopMovies = (apiReq) => {

        fetch(apiReq)
            .then(data => data.json())
            .then(data => {
                setMovies([
                    ...movies,
                    ...data.results
                ]);
                setMovieImage(movieImage);
                setCurrentPage(data.page);
            }, setLoading(false))
            .catch(err => console.error('ERROR:', err)
        )
    };

    const handlePageLoad = () => {
        let apiReq;
            setLoading(true);
            apiReq = `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${currentPage + 1}`;

            getPopMovies(apiReq);
    };

    return (
        <div>
            { movieImage && 
            <ImageCard 
                image={`${TMDB_IMAGE_URL}${BACKDROP_SIZE}${movieImage.backdrop_path}`}
                title={ movieImage.title }
                text={ movieImage.overview }
            /> }

            <div>
                <Title level={2}>Popular Movies</Title>
                
                <hr />
                <Row gutter={[16, 16]}>
                    { movies && movies.map((movie, i) => (
                        <Fragment key={ i }>
                            <GridCard
                                image={
                                    movie.poster_path ?
                                    `${TMDB_IMAGE_URL}${POSTER_SIZE}${movie.poster_path}` : null
                                }
                                movieId={ movie.id }
                                movieName={ movie.title }
                            />
                        </Fragment>
                    ))}
                </Row>

                { loading && <div>Loading...</div> }
                
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button ref={ btnRef } onClick={ handlePageLoad }
                        > Load more
                    </button>
                </div>
            </div>
        </div>
    )
};
