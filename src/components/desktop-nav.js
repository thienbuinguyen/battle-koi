import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
  Dropdown,
  Image
} from 'semantic-ui-react'

function DesktopNav(props) {
  const history = useHistory();
  const [fixed, setFixed] = useState(false);
  const hideFixedMenu = () => { setFixed(false); };
  const showFixedMenu = () => { setFixed(true); };
  console.dir(props.minHeight);
  return (
    <Visibility
      once={false}
      onBottomPassed={showFixedMenu}
      onBottomPassedReverse={hideFixedMenu}
    >
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: props.minHeight || 700, padding: '1em 0em' }}
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
            <Menu.Item active={props.active === "contact"} onClick={() => { history.push('/contact') }}>
              Contact
                  </Menu.Item>
          </Container>
        </Menu>
        {props.children}
      </Segment>
    </Visibility>
  )
}

export default DesktopNav;