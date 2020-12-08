import React, { Fragment } from 'react';
import {
  Container, Grid, Header, Placeholder, Segment
} from 'semantic-ui-react';
import DesktopNav from './desktop-nav';
import HomepageHeading from './homepage-heading';
import Footer from './footer';
import DesktopLayout from './desktop-layout';

function Home() {
  return (
    <DesktopLayout heading=
      {
        <HomepageHeading mainContent={"BATTLE KOI"} subContent={"One Man Game Development Studio"} />
      }
    >
      <Segment vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header as='h3'>
                This page is currently under construction...
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line length='very short' />
                  <Placeholder.Line length='medium' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>

            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Segment>
    </DesktopLayout>
  )
}

export default Home;