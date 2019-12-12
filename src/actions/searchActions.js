import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES, LOADING } from './types';
import axios from 'axios';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

