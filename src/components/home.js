import React from 'react';
import DesktopNav from './desktop-nav';
import HomepageHeading from './homepage-heading';

function Home() {
  return (
    <DesktopNav active={"home"}>
      <HomepageHeading mainContent={"BATTLE KOI"} subContent={"One Man Game Development Studio"}/>
    </DesktopNav>

  )
}

export default Home;