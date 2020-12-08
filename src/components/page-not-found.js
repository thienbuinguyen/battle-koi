import React from 'react';

import DesktopNav from './desktop-nav';
import HomepageHeading from './homepage-heading';

function PageNotFound() {
  return (
    <DesktopNav active={"home"}>
      <HomepageHeading mainContent={"LOST BATTLE KOI"} subContent={"The page you requested does not exist..."} />
    </DesktopNav>
  )
}

export default PageNotFound;