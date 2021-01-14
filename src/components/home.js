import React, { Fragment } from 'react';
import {
  Button,
  Container, Grid, Header, Placeholder, Segment, Image
} from 'semantic-ui-react';
import styled, { css } from 'styled-components'
import HomepageHeading from './homepage-heading';
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
        <HomepageHeading mainContent={"BATTLE KOI"} subContent={"One Man Game Development Studio"} image="logo.png" />
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
          <Segment vertical>
            <Image src="milkshake-jump/feature.png" />
            <Container text >
            <p style={{ fontSize: "1.5em" }}>Jump higher than any other milkshake!</p>
            </Container>
          </Segment>

          <Button as='a' size='large' href='/#/milkshake-jump'>
            Read More
          </Button>
        </Container>

      </Segment>
    </DesktopLayout>
  )
}

export default Home;