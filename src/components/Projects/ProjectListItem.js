import React from 'react';
import { Link } from 'react-router';
import { ListItem, ListItemContent } from 'react-mdl';

export default class ProjectListItem extends React.Component {
  render() {
    return (
      <ListItem threeLine>
        <ListItemContent subtitle={this.props.description}>
          <Link to={`/projects/${this.props.slug}`}>{this.props.name}</Link>
        </ListItemContent>
      </ListItem>
    );
  }
}
