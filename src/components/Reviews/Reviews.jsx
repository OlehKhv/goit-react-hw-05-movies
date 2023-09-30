import ErrorNotification from 'components/ErrorNotification/ErrorNotification';
import NotFoundNotification from 'components/ErrorNotification/NotFoundNotification';
import Loader from 'components/Loader/Loader';
import { SubTitle, Text } from 'pages/MovieDetails.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/movies-api';

const Cast = () => {
    const [reviewsList, setReviewsList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        !reviewsList && fetchReviews();

        async function fetchReviews() {
            setError(null);
            setIsLoading(true);

            try {
                const data = await getReviews(movieId);

                setReviewsList(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
    }, [movieId, reviewsList]);

    return (
        <>
            {isLoading && <Loader />}

            {error && !isLoading && (
                <ErrorNotification>
                    Oops... Something went wrong. Error: {error}. Please, try
                    again.
                </ErrorNotification>
            )}

            {reviewsList?.length === 0 && !error && !isLoading && (
                <NotFoundNotification>
                    We don`t have any reviews for this movie.
                </NotFoundNotification>
            )}

            {reviewsList?.length > 0 && !isLoading && !error && (
                <ul>
                    {reviewsList.map(({ id, author, content }) => (
                        <li key={id}>
                            <SubTitle>Author: {author}</SubTitle>
                            <Text>{content}</Text>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Cast;
