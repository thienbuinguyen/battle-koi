// @ts-nocheck
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { createMedia } from '@artsy/fresnel';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import MilkshakeJump from './components/milkshake-jump';
import PageNotFound from './components/page-not-found';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
})

function App() {
  return (
    <MediaContextProvider>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/milkshake-jump">
            <MilkshakeJump />
          </Route>
          <Redirect from="/home" to="/"/>
          {/* <Route path="*" component={PageNotFound} status={404}/> */}
        </Switch>
      </Router>
      <Media at="sm">

      </Media>
      <Media greaterThanOrEqual="md">

      </Media>
    </MediaContextProvider>
  );
}

export default App;
