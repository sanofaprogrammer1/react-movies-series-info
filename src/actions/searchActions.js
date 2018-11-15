import { FETCH_MOVIES, SEARCH_MOVIE, LOADING } from './types';
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
