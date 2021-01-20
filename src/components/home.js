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
        <HomepageHeading mainContent={"BATTLE KOI"} subContent={"Game Development Studio"} image="logo.png" />
      }
    >
      <Helmet>
        <title>Battle Koi</title>
      </Helmet>

      <Segment vertical>
        <Container text textAlign="center">
          <Header as='h3' style={{ fontSize: '2em' }}>
            Released Games
              </Header>
          <Segment>
            <Header as='h2'>Milkshake Jump</Header>
            <Image src="milkshake-jump/feature.png" />
            <Container text >
              <p style={{ fontSize: "1.5em" }}>Jump higher than any other milkshake!</p>
              <Grid columns={2} divided>
                <Grid.Column>
                  <Image 
                  href='https://play.google.com/store/apps/details?id=com.BattleKoi.MilkshakeJump&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                  src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                  />
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <Button as='a' size='massive' href='/#/milkshake-jump'>
                    Read More
          </Button>
                </Grid.Column>
              </Grid>


            </Container>
          </Segment>


        </Container>

      </Segment>
    </DesktopLayout>
  )
}

export default Home;