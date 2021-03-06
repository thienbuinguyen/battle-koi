import { checkPropTypes } from 'prop-types';
import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Image,
} from 'semantic-ui-react';

function HomepageHeading(props) {
  return (
    <Container text>
    <Header
      as='h1'
      content={props.mainContent}
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
      image={props.image}
    />
    {/* <Image src="logo.png" size="medium" centered></Image> */}
    <Header
      as='h2'
      content={props.subContent}
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
  </Container>
  )
}

export default HomepageHeading;