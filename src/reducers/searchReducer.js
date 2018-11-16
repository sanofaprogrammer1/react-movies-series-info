// here we have our actions

import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  SEARCH_MOVIE,
  LOADING
} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
