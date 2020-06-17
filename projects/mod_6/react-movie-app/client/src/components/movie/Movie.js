import React, { useEffect, useState, useContext } from 'react';
import { 
    TMDB_API_KEY, 
    TMDB_BASE_URL, 
    TMDB_IMAGE_URL, 
    IMAGE_SIZE 
} from '../../utils/config';    
import { useParams } from 'react-router-dom';
import axios from '../../utils';
import UserContext from '../../context/userContext';
import CommentRatings from '../comments/CommentRatings';
import GridCard from './GridCard';
import ImageCard from './ImageCard';
import MovieCard from './MovieCard';
import Favorite from '../favorite/Favorite';
import CommentList from '../comments/CommentList';
import { Row, Button } from 'antd';

export default function Movie() {
    const [movies, setMovies] = useState([]);
    const [casts, setCasts] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toggleCast, setToggleCast] = useState(false);

    const { user } = useContext(UserContext);
    const { movieId } = useParams();

    useEffect(() => {

        let apiMovieEndpoint =`${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`;

        getMovieDetails(apiMovieEndpoint);

        axios.post('/api/comments/get_comments', movieId)
            .then(res => {
                if (res.data.success) {
                    setCommentList(commentList);
                } else {
                    console.log('Error while retrieving comments');
                }
            })
    }, []);

    const toggleCastMembers = () => {
        setToggleCast(!toggleCast);
    };

    const getMovieDetails = (endpoint) => {
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                setMovies(result);
                setLoading(false);

                let apiCastEndpoint = `${TMDB_BASE_URL}/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`;

                fetch(apiCastEndpoint)
                    .then(result => result.json())
                    .then(result => {
                        setCasts(result.cast);
                    })
                    setLoading(false);
            })
            .catch(err => console.error('ERROR:', err)
        )
    };

    const updateComments = (newComment) => {
        setCommentList(commentList.concat(newComment));
    };

    return (
        <div>
            { !loading ?
                <ImageCard
                    image={`${TMDB_IMAGE_URL}${IMAGE_SIZE}${movies.backdrop_path}`}
                    title={ movies.title }
                    text={ movies.overview }
                />
                :
                <div>loading...</div>
            }

            <div style={{ width: '85%', margin: '1rem auto' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Favorite 
                        movieInfo={ movies } 
                        movieId={ movieId } 
                        userInfo={ user._id } 
                    />
                </div>

                { !loading ?
                    <MovieCard movie={ movies } />
                : <div>loading...</div> }

                <br />
                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <Button 
                        onClick={ toggleCastMembers }
                        > Toggle CastMembers
                    </Button>
                </div>

                { toggleCast &&
                    <Row gutter={[16, 16]}>
                        { !loading ? casts.map((cast, i) => (
                            cast.profile_path &&
                                <GridCard actor 
                                    key={ i } 
                                    image={ cast.profile_path } 
                                    characterName={ cast.character } 
                                />
                            )) 
                        :
                            <div>loading...</div>
                        }
                    </Row>
                }

                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CommentRatings video 
                        videoId={ movieId } 
                        userId={ user._id }
                    />
                </div>

                <CommentList 
                    movieTitle={ movies.title } 
                    commentList={ commentList } 
                    postId={ movieId } 
                    handleRefresh={ updateComments } 
                />
            </div>
        </div>
    )
};
