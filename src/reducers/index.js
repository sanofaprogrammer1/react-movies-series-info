//Here we have all our reducers

import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
  movies: searchReducer
});
