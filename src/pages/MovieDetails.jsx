import ErrorNotification from 'components/ErrorNotification/ErrorNotification';
import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/movies-api';
import {
    AddInfoList,
    BackButton,
    Card,
    SubTitle,
    Text,
    Title,
} from './MovieDetails.styled';
import { StyledLink } from './Home.styled';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const backLinkRef = useRef(location.state?.from ?? '/movies');

    const handleBackToList = () => {
        navigate(backLinkRef.current);
    };

    useEffect(() => {
        !movie && fetchMovie();

        async function fetchMovie() {
            setError(null);
            setIsLoading(true);

            try {
                const data = await getMovieById(movieId);
                setMovie(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
    }, [movie, movieId]);

    const userScore = () => {
        return Math.round(movie.vote_average * 10);
    };

    return (
        <>
            <BackButton onClick={handleBackToList}>
                <span>◀</span>
                <span>Go back</span>
            </BackButton>

            {isLoading && <Loader />}

            {error && !isLoading && (
                <ErrorNotification>
                    Oops... Something went wrong. Error: {error}. Please, try
                    again.
                </ErrorNotification>
            )}

            {movie && (
                <div>
                    <Card>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            width={300}
                        />
                        <div>
                            <Title>{movie.title}</Title>
                            <Text>User score: {userScore()}%</Text>
                            <SubTitle>Overview</SubTitle>
                            <Text>{movie.overview}</Text>
                            <SubTitle>Genres</SubTitle>
                            <Text>
                                {movie.genres.map(({ name, id }) => (
                                    <span key={id}>{name} </span>
                                ))}
                            </Text>
                        </div>
                    </Card>

                    <Text>Additional information</Text>
                    <AddInfoList>
                        <li>
                            <StyledLink to={'cast'}>Cast</StyledLink>
                        </li>
                        <li>
                            <StyledLink to={'reviews'}>Reviews</StyledLink>
                        </li>
                    </AddInfoList>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </div>
            )}
        </>
    );
};

export default MovieDetails;
