import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        <SearchForm />
        {loading ? <Spinner /> : 'Movies'}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
