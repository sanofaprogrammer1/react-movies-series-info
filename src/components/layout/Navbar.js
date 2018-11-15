import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white" to="/">
              MovieInfo
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
