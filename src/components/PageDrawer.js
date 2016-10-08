import React from 'react';
import { Link } from 'react-router';
import { Drawer, Navigation } from 'react-mdl';

export default class PageDrawer extends React.Component {
  render() {
    return (
      <Drawer title="Title">
        <Navigation>
          <Link to="/projects">Projects</Link>
          <Link to="">Link</Link>
          <Link to="">Link</Link>
          <Link to="">Link</Link>
        </Navigation>
      </Drawer>
    );
  }
}
