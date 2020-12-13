import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, Grid, GridColumn, Header, Icon, Item, List, Segment } from 'semantic-ui-react';

const Mailto = ({ email, subject, body, children }) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};

function Footer() {
  const history = useHistory();
  const copyright = "Copyright \u00a9 Battle Koi. All Rights Reserved.";

  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Battle Koi' />
              <List link inverted>
                <List.Item as='a' onClick={() => { history.push('/about') }}>About</List.Item>
                <List.Item as='a' onClick={() => { history.push('/contact') }}>Contact</List.Item>
                <List.Item as='a' onClick={() => { history.push('/privacy') }}>Privacy Policy</List.Item>
                <List.Item as='a' onClick={() => { history.push('/terms-and-conditions') }}>Terms & Conditions</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Games' />
              <List link inverted>
                <List.Item as='a' onClick={() => { history.push('/milkshake-jump') }}>Milkshake Jump</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Social Media
              </Header>


              <List horizontal>
                <List.Item as="a" target="_blank" href='https://www.facebook.com'>
                <Icon link={true} color="blue" name="facebook" size="big" />
                </List.Item>
                <List.Item as="a" target="_blank" href='https://www.twitter.com'>
                <Icon link={true} color="blue" name="twitter" size="big" />
                </List.Item>
                <List.Item as="a" target="_blank" href='https://www.youtube.com'>
                <Icon link={true} color="red" name="youtube" size="big" />
                </List.Item>
                <List.Item as="a" target="_blank" href="mailto:thien@battlekoi.com?subject='Battle Koi Website Enquiry'">
                <Icon link={true} color="grey" name="mail" size="big" />
                </List.Item>
              </List>
            </Grid.Column>
            
          </Grid.Row>
          <Grid.Row>
            {copyright}
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer;