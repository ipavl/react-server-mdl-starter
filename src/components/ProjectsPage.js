import React from 'react';
import { List } from 'react-mdl';
import ProjectListItem from './ProjectListItem';
import projects from '../data/projects';

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>

        <List>
          {projects.map(projectData => <ProjectListItem key={projectData.slug} {...projectData} />)}
        </List>
      </div>
    );
  }
}
