import React from 'react';

import DesktopNav from './desktop-nav';
import HomepageHeading from './homepage-heading';

function MilkshakeJump() {
  return (
    <DesktopNav active={"milkshake-jump"}>
      <HomepageHeading mainContent={"MILKSHAKE JUMP"}/>
    </DesktopNav>
  )
}

export default MilkshakeJump;