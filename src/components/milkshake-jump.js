import React from 'react';
import { Segment, Grid, Header, Placeholder, Container, List } from 'semantic-ui-react';
import DesktopLayout from './desktop-layout';

import HomepageHeading from './homepage-heading';

function MilkshakeJump() {
  return (
    <DesktopLayout heading=
    {
      <HomepageHeading mainContent={"MILKSHAKE JUMP"} subContent={"Jumping higher than any other milkshake..."} />
    }
  >
    <Segment vertical>
      <Container text textAlign="center">
        <Header as="h3" style={{fontSize: "2em"}}>Reaching the stars...</Header>
        <p style={{fontSize:"1.5em"}}>
        Wow, here's a milkshake that can jump up <i>high</i>!
        <br></br>The goal is to see how far up the <i>sky</i>
        <br></br>But trouble awaits your path, be ready to <i>cry</i>
        <br></br>If you aren't careful, you will surely <i>die</i>.
        </p>

        <p>Stay tuned for more details.</p>
        {/* <Header as="h3" style={{fontSize: "2em"}}>Features</Header>
        <List bulleted>
          <List.Item>
            What
          </List.Item>
        </List> */}
      </Container>
    </Segment>
  </DesktopLayout>
  )
}

export default MilkshakeJump;