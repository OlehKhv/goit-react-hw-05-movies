import ErrorNotification from 'components/ErrorNotification/ErrorNotification';
import Loader from 'components/Loader/Loader';
import { Text } from 'pages/MovieDetails.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movies-api';
import { CardActor } from './Cast.styled';

const Cast = () => {
    const [castList, setCastList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        !castList && fetchCast();

        async function fetchCast() {
            setError(null);
            setIsLoading(true);

            try {
                const data = await getCast(movieId);
                setCastList(data.cast);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
    }, [castList, movieId]);

    return (
        <>
            {isLoading && <Loader />}

            {error && !isLoading && (
                <ErrorNotification>
                    Oops... Something went wrong. Error: {error}. Please, try
                    again.
                </ErrorNotification>
            )}

            {castList?.length > 0 && (
                <ul>
                    {castList.map(
                        ({ cast_id, name, character, profile_path }) => (
                            <CardActor key={cast_id}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                                    alt={name}
                                    width={100}
                                />
                                <div>
                                    <Text>{name}</Text>
                                    <Text>Character: {character}</Text>
                                </div>
                            </CardActor>
                        )
                    )}
                </ul>
            )}
        </>
    );
};

export default Cast;
