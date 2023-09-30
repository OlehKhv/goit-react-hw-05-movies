import ErrorNotification from 'components/ErrorNotification/ErrorNotification';
import Loader from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
    Link,
    Outlet,
} from 'react-router-dom';
import { getMovieById } from 'services/movies-api';

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
            <button onClick={handleBackToList}>◀Go back</button>

            {isLoading && <Loader />}

            {error && !isLoading && (
                <ErrorNotification>
                    Oops... Something went wrong. Error: {error}. Please, try
                    again.
                </ErrorNotification>
            )}

            {movie && (
                <div>
                    <img src={movie.poster_path} alt="" width={300} />
                    <h2>{movie.title}</h2>
                    <p>User score: {userScore()}%</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>
                        {movie.genres.map(({ name, id }) => (
                            <span key={id}>{name} </span>
                        ))}
                    </p>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <Link to={'cast'}>Cast</Link>
                        </li>
                        <li>
                            <Link to={'reviews'}>Reviews</Link>
                        </li>
                    </ul>
                    <Outlet />
                </div>
            )}
        </>
    );
};

export default MovieDetails;
