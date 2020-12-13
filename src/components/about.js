import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Grid, Header, Placeholder, Segment } from 'semantic-ui-react';
import DesktopLayout from './desktop-layout';

import DesktopNav from './desktop-nav';
import HomepageHeading from './homepage-heading';

function About() {
  return (
    <DesktopLayout heading=
      {
        <HomepageHeading mainContent={"BATTLE KOI"} subContent={"About"} />
      }
    >
      <Helmet>
        <title>Battle Koi - About</title>
      </Helmet>

      <Segment vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Battle Koi
                </Header>
                <p style={{fontSize: "1.5em"}}>
                  One man studio focusing on mobile games
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Me
                </Header>
                <p style={{fontSize: "1.5em"}}>
                  Australian programmer making games as a hobby
                  </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Segment>
    </DesktopLayout>
  )
}

export default About;