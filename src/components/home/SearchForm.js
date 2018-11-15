import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchMovies,
  searchMovie,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">Search for a movie ..</h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies..."
              onChange={this.onChange}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary btn-bg mt-3"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { fetchMovies, searchMovie, setLoading }
)(SearchForm);
