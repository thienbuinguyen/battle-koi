import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Grid, Header, Placeholder, Segment, List, Icon } from 'semantic-ui-react';
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

      <Helmet>
        <title>Battle Koi - Contact</title>
      </Helmet>

      <Segment vertical>
        <Container text textAlign="center">
          <Header as='h3' style={{ fontSize: '2em' }}>
            Stay Connected!
          </Header>

          <List horizontal>
            <List.Item as="a" target="_blank" href='https://www.facebook.com/BattleKoiGames'>
              <Icon link={true} color="blue" name="facebook" size="huge" />
            </List.Item>
            <List.Item as="a" target="_blank" href='https://twitter.com/BattleKoi'>
              <Icon link={true} color="blue" name="twitter" size="huge" />
            </List.Item>
            <List.Item as="a" target="_blank" href='https://www.instagram.com/battlekoigames/'>
              <Icon link={true} color="blue" name="instagram" size="huge" />
            </List.Item>
            <List.Item as="a" target="_blank" href='https://www.youtube.com/channel/UCuY7aGoy6gnluhWWcEZ5BIQ'>
              <Icon link={true} color="red" name="youtube" size="huge" />
            </List.Item>
            <List.Item as="a" target="_blank" href="mailto:thien@battlekoi.com?subject='Battle Koi Website Enquiry'">
              <Icon link={true} color="grey" name="mail" size="huge" />
            </List.Item>
          </List>
        </Container>
      </Segment>
    </DesktopLayout>
  )
}

export default Contact;