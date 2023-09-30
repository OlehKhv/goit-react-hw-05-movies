import ErrorNotification from 'components/ErrorNotification/ErrorNotification';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/movies-api';
import { MainTitle, MovieList, StyledLink } from './Home.styled';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();

    useEffect(() => {
        trendingMovies.length === 0 && fetchMovies();

        async function fetchMovies() {
            setError(null);
            setIsLoading(true);

            try {
                const data = await getTrendingMovies();
                setTrendingMovies(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
    }, [trendingMovies.length]);

    return (
        <>
            <MainTitle>Trending today</MainTitle>

            {isLoading && <Loader />}

            {error && !isLoading && (
                <ErrorNotification>
                    Oops... Something went wrong. Error: {error}. Please, try
                    again.
                </ErrorNotification>
            )}

            <MovieList>
                {trendingMovies.map(({ id, title }) => (
                    <li key={id}>
                        <StyledLink
                            to={`movies/${id}`}
                            state={{ from: location }}
                        >
                            {title}
                        </StyledLink>
                    </li>
                ))}
            </MovieList>
        </>
    );
};

export default Home;
