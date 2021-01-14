// @ts-nocheck
import './App.css';
import {
  HashRouter as Router,
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
import Privacy from 'components/privacy';
import Terms from 'components/terms-and-conditions';

const { MediaContextProvider } = createMedia({
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
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms-and-conditions">
            <Terms />
          </Route>
          <Route path="/milkshake-jump">
            <MilkshakeJump />
          </Route>
          <Redirect from="/home" to="/" />
          {/* <Route path="*" component={PageNotFound} status={404}/> */}
        </Switch>
      </Router>
    </MediaContextProvider>
  );
}

export default App;
