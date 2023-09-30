import ErrorNotification from 'components/ErrorNotification/ErrorNotification';
import Loader from 'components/Loader/Loader';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'services/movies-api';

const Movies = () => {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('q') ?? '';

    const fetchMovies = useCallback(async query => {
        setError(null);
        setIsLoading(true);
        try {
            const data = await getMoviesBySearch(query);
            setSearchedMovies(data.results);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleSearch = async e => {
        e.preventDefault();
        if (!searchQuery) return;

        fetchMovies(searchQuery);
    };

    const currentSearchQueryRef = useRef(searchQuery);

    useEffect(() => {
        currentSearchQueryRef.current &&
            fetchMovies(currentSearchQueryRef.current);
    }, [fetchMovies]);

    const updateQueryString = ({ target: { value } }) => {
        const nextParams = value !== '' ? { q: value } : {};
        setSearchParams(nextParams);
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    onChange={updateQueryString}
                    value={searchQuery}
                    placeholder="Enter movie name"
                />
                <button type="submit">🔍Search</button>
            </form>

            {isLoading && <Loader />}

            {error && !isLoading && (
                <ErrorNotification>
                    Oops... Something went wrong. Error: {error}. Please, try
                    again.
                </ErrorNotification>
            )}

            {searchedMovies.length > 0 && (
                <ul>
                    {searchedMovies.map(({ id, title }) => (
                        <li key={id}>
                            <Link to={`${id}`} state={{ from: location }}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Movies;
