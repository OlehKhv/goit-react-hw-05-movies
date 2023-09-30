import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2UyZThhYjNkZDA2ZjdiN2RhYTUzZDg5M2QxN2JjNyIsInN1YiI6IjY1MTcwMzI0MDcyMTY2MDBhY2IzYWNjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TfyalqH_CPzKGjbDg22zFPjtUbgpb17QxcfEfW6ldhA';

export async function getTrendingMovies() {
    const response = await axios('/trending/movie/day?language=en-US');
    return response.data;
}

export async function getMoviesBySearch(value) {
    const response = await axios(
        `/search/movie?query=${value}&include_adult=true&language=en-US&page=1`
    );
    return response.data;
}

export async function getMovieById(id) {
    const response = await axios(`/movie/${id}?language=en-US`);
    return response.data;
}

export async function getCast(id) {
    const response = await axios(`/movie/${id}/credits?language=en-US`);
    return response.data;
}

export async function getReviews(id) {
    const response = await axios(`/movie/${id}/reviews?language=en-US&page=1`);
    return response.data;
}
