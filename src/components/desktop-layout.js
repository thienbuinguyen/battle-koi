import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import DesktopNav from "./desktop-nav";
import Footer from "./footer";

function DesktopLayout(props) {
  return (
    <Fragment>
      <DesktopNav minHeight={props.minHeight}>
        {props.heading}
      </DesktopNav>,
      <Container>
        {props.children}
      </Container>,
      <Footer />
    </Fragment>
  )
}

export default DesktopLayout;