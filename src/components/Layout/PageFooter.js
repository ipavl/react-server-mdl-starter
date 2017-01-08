import React from 'react';
import { Footer, FooterSection } from 'react-mdl';

export default class PageFooter extends React.Component {
  render() {
    return (
      <Footer size="mini">
        <FooterSection type="left">
          <p>Copyright &copy; 2016 YourName</p>
        </FooterSection>
      </Footer>
    );
  }
}
