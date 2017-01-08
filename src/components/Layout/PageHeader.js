import React from 'react';
import { Link } from 'react-router';
import { Header, Navigation } from 'react-mdl';

export default class PageHeader extends React.Component {
  render() {
    return (
      <Header title={<Link to="/">Title</Link>}>
        <Navigation className="mdl-layout--large-screen-only">
          <Link to="/projects">Projects</Link>
          <Link to="">Link</Link>
          <Link to="">Link</Link>
          <Link to="">Link</Link>
        </Navigation>
      </Header>
    );
  }
}
