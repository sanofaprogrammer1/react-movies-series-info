// here we have our actions

import { FETCH_MOVIES, SEARCH_MOVIE, LOADING } from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
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
