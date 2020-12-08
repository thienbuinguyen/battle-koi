import React from 'react';
import { Grid, Header, Placeholder, Segment } from 'semantic-ui-react';
import DesktopLayout from './desktop-layout';
import HomepageHeading from './homepage-heading';

function DesktopHeading() {
  return
}

function Contact(props) {


  return (
    <DesktopLayout heading=
      {
        <HomepageHeading mainContent={"BATTLE KOI"} subContent={"Contact"} />
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

export default Contact;