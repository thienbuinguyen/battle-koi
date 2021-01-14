import React from 'react';
import { Helmet } from 'react-helmet';
import { Segment, Grid, Header, Placeholder, Container, List, Image, Divider, Embed } from 'semantic-ui-react';
import DesktopLayout from './desktop-layout';

function MilkshakeJump() {

  const images = [];
  for (let i = 1; i < 9; i++) {
    const str = `milkshake-jump/mobile-${i}.png`;
    images.push(<Image src={str} size="small" ></Image>);
  }

  return (
    <DesktopLayout minHeight={50}>
      <Helmet>
        <title>Milkshake Jump | Battle Koi</title>
      </Helmet>

      <Segment vertical>
        <Image src="milkshake-jump/feature.png" />
      </Segment>
      <Segment vertical>
        <Container text textAlign="center">
          <Header as="h2">COMING SOON TO GOOGLE PLAY STORE</Header>
        </Container>

      </Segment>
      <Segment vertical>
        <Container text textAlign="center">
          <Header as="h3" style={{ fontSize: "2em" }}>Reaching the stars...</Header>
          <p style={{ fontSize: "1.5em" }}>
            Some milkshakes have a dream... A dream of reaching the stars! Thankfully, these milkshakes can jump and the skies are FILLED with rainbow clouds and floating mushrooms.
            Can YOU help them fulfill their dream?
          </p>
        </Container>
      </Segment>
      <Segment>
        <Container text textAlign="center">
          <Header as="h3" style={{ fontSize: "2em" }}>Features</Header>
        </Container>

        <Container text textAlign="left">
          <List bulleted >
            <List.Item>
              Jumping milkshakes!
        </List.Item>
            <List.Item>
              27 cool & refreshing milkshake flavors!
        </List.Item>
            <List.Item>
              A beautiful world with rainbow clouds, stars and floating mushrooms!
        </List.Item>
            <List.Item>
              14 achievements to show who's the best milkshake!
        </List.Item>
            <List.Item>
              Leaderboards to compete with your friends!
        </List.Item>
          </List>
        </Container>
      </Segment>
      <Segment>
        <Container>
          <Grid stackable>
            {
              images.map(image => { return <Grid.Column computer={2} tablet={4} mobile={16}>{image}</Grid.Column> })
            }
          </Grid>
        </Container>
      </Segment>
      <Segment>
        <Embed
          id='WA8DAXLNmjE'
          placeholder='milkshake-jump/youtube-placeholder.png'
          source='youtube'
        />
      </Segment>
    </DesktopLayout>
  )
}

export default MilkshakeJump;