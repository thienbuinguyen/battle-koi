import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import DesktopNav from "./desktop-nav";
import Footer from "./footer";

function DesktopLayout(props) {
  console.dir(props.navMainContent);
  return (
    <Fragment>
      <DesktopNav>
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