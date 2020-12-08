import React from 'react';

import DesktopNav from './desktop-nav';
import HomepageHeading from './homepage-heading';

function About() {
  return (
    <DesktopNav active={"about"}>
      <HomepageHeading mainContent={"BATTLE KOI"} subContent={"About"}/>
    </DesktopNav>
  )
}

export default About;