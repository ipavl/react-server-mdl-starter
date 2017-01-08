import React from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';
import projects from '../../data/projects';
import NotFoundPage from '../NotFoundPage';

export default class ProjectDetailsPage extends React.Component {
  getProjectDetails() {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].slug === this.props.params.slug) {
        return projects[i];
      }
    }

    return null;
  }

  render() {
    let project = this.getProjectDetails();

    if (project === null) {
      // TODO: Send back a 404 status code
      return <NotFoundPage />;
    }

    return (
      <div>
        <h1>{project.name}</h1>

        <div>{project.description}</div>

        <h2>Tags</h2>

        <List>
          {project.tags.map(tagData =>
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
