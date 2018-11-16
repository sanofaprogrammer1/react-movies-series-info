import { FETCH_MOVIES, FETCH_MOVIE, SEARCH_MOVIE, LOADING } from './types';
import axios from 'axios';

import { APIKey } from '../APIKeys';

export const fetchMovies = data => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${data}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
