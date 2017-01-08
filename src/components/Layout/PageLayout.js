import React from 'react';
import { Link } from 'react-router';
import { Layout, Content, Grid, Cell } from 'react-mdl';
import PageDrawer from './PageDrawer';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

export default class PageLayout extends React.Component {
  render() {
    return (
      <Layout fixedHeader className="mdl-layout--no-desktop-drawer-button">
        <PageHeader />
        <PageDrawer />
        <Content>
          <Grid>
            <Cell col={8}>
              {this.props.children}
            </Cell>
          </Grid>
        </Content>
        <PageFooter />
      </Layout>
    );
  }
}
