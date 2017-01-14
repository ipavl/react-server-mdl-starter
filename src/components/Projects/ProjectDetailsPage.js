import React from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';
import projects from '../../data/projects';
import NotFoundPage from '../NotFoundPage';

export default class ProjectDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: null,
    };

    for (const project of projects) {
      if (project.slug === props.params.slug) {
        this.state = { project };
        break;
      }
    }
  }

  render() {
    if (this.state.project === null) {
      // TODO: Send back a 404 status code
      return <NotFoundPage />;
    }

    return (
      <div>
        <h1>{this.state.project.name}</h1>

        <div>{this.state.project.description}</div>

        <h2>Tags</h2>

        <List>
          {this.state.project.tags.map(tagData =>
            <ListItem key={tagData}>
              <ListItemContent>
                {tagData}
              </ListItemContent>
            </ListItem>
          )}
        </List>
      </div>
    );
  }
}
