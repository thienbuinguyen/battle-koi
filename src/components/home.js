import React, { Fragment } from 'react';
import {
  Button,
  Container, Grid, Header, Placeholder, Segment
} from 'semantic-ui-react';
import styled, { css } from 'styled-components'
import DesktopNav from './desktop-nav';
import HomepageHeading from './homepage-heading';
import Footer from './footer';
import DesktopLayout from './desktop-layout';
import { Helmet } from 'react-helmet';


const Paragraph = styled.p`
  text-align: center;
  font-size: 1.5em;
`

function Home() {
  return (
    <DesktopLayout heading=
      {
        <HomepageHeading mainContent={"BATTLE KOI"} subContent={"One Man Game Development Studio"} />
      }
    >
      <Helmet>
        <title>Battle Koi</title>
      </Helmet>

      <Segment vertical>
        <Container text textAlign="center">
          <Header as='h3' style={{ fontSize: '2em' }}>
            Upcoming Games
              </Header>
          <p style={{ fontSize: '1.5em' }}>
            Milkshake Jump is about experiencing the life of a milkshake.
            Thankfully, you are a milkshake that can jump.
          </p>

          <Button as='a' size='large' href="/milkshake-jump">
            Read More
          </Button>
        </Container>

      </Segment>
    </DesktopLayout>
  )
}

export default Home;