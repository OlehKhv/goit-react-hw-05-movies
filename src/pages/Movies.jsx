import ErrorNotification from 'components/ErrorNotification/ErrorNotification';
import Loader from 'components/Loader/Loader';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'services/movies-api';
import { MovieList, StyledLink } from './Home.styled';
import { SearchButton, SearchForm, SearchInput } from './Movies.styled';
import NotFoundNotification from 'components/ErrorNotification/NotFoundNotification';

const Movies = () => {
    const [searchedMovies, setSearchedMovies] = useState(null);
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
            <SearchForm onSubmit={handleSearch}>
                <SearchInput
                    type="text"
                    onChange={updateQueryString}
                    value={searchQuery}
                    placeholder="Enter movie name"
                />
                <SearchButton type="submit">
                    <span>🔍</span> <span>Search</span>
                </SearchButton>
            </SearchForm>

            {isLoading && <Loader />}

            {error && !isLoading && (
                <ErrorNotification>
                    Oops... Something went wrong. Error: {error}. Please, try
                    again.
                </ErrorNotification>
            )}

            {searchedMovies?.length === 0 && !isLoading && !error && (
                <NotFoundNotification>
                    Sorry, there are no images matching your search query: $
                    {searchQuery}. Please change your search parameters and try
                    again.
                </NotFoundNotification>
            )}

            {searchedMovies?.length > 0 && !isLoading && !error && (
                <MovieList>
                    {searchedMovies.map(({ id, title }) => (
                        <li key={id}>
                            <StyledLink to={`${id}`} state={{ from: location }}>
                                {title}
                            </StyledLink>
                        </li>
                    ))}
                </MovieList>
            )}
        </>
    );
};

export default Movies;
