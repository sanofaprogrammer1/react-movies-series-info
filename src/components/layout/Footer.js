import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:{' '}
            <span className="text-warning font-weight-normal">
              Yaser AlAzem
            </span>{' '}
            , Using <i class="fab fa-react" /> React JS integrated with external
            movies data API{' '}
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMDB
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
