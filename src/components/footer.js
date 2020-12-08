import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

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
              <List.Item as='a' onClick={() => {history.push('/about')}}>About</List.Item>
                <List.Item as='a' onClick={() => {history.push('/contact')}}>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Games' />
              <List link inverted>
                <List.Item as='a' onClick={() => {history.push('/milkshake-jump')}}>Milkshake Jump</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Social Media
              </Header>
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