import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            Hello!
          </Link>
        </header>

        <div className="app-content">{this.props.children}</div>

        <footer>
          <p>Built with <a href="https://facebook.github.io/react/">React</a>.</p>
        </footer>
      </div>
    );
  }
}
