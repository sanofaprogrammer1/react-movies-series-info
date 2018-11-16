import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              MovieSeriesInfo
            </Link>
          </div>
          <ul class="navbar-nav ml-auto text-light d-inline-block">
            <li class="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
            </li>
            {/* <li class="nav-item d-inline-block mt-0">
              <img src={logo} alt="logo" id="logo" />
            </li> */}
            <li class="nav-item d-inline-block mr-4">
              <i class="fab fa-react fa-5x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
