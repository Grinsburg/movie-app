import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES, LOADING } from './types';
import axios from 'axios';

export const searchMovie = value => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: value
    });
};

export const fetchMovies = text => dispatch => {
    axios
        .get(`http://www.omdbapi.com/?apikey=3350d914&s=${text}`)
        .then(response => 
            dispatch({
                type: FETCH_MOVIES,
                payload: response.data
            })
        )
        .catch(err => console.log(err))
}

export const fetchMovie = id => dispatch => {
    axios
        .get(`http://www.omdbapi.com/?apikey=3350d914&i=${id}`)
        .then(response => 
            dispatch({
                type: FETCH_MOVIE,
                // mb data.Search
                payload: response.data
            })    
        )
        .catch(err => console.log(err))
}

export const setLoading = () => {
    return {
        type: LOADING
    }
}