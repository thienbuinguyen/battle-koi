import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { createMedia } from "@artsy/fresnel"

import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
  Dropdown,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
})

function DesktopNav(props) {
  const history = useHistory();
  const [fixed, setFixed] = useState(true);
  const hideFixedMenu = () => { setFixed(false); };
  const showFixedMenu = () => { setFixed(true); };

  console.log(props.active);

  return (
    <MediaContextProvider>
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={showFixedMenu}
          onBottomPassedReverse={hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item active={props.active === "home"} onClick={() => { history.push('/home') }}>
                  Home
                </Menu.Item>
                <Dropdown text='Games' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Header>Mobile</Dropdown.Header>
                    <Dropdown.Item onClick={() => { history.push('/milkshake-jump') }}>Milkshake Jump</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item active={props.active === "about"} onClick={() => { history.push('/about') }}>
                  About
                  </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
      </Media>
    </MediaContextProvider>
  )
}

export default DesktopNav;