import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createMedia } from '@artsy/fresnel';

import Home from './components/home';
import About from './components/about';
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/milkshake-jump">
            <MilkshakeJump />
          </Route>
          {/* <Redirect from="/" to="/home"/> */}
          <Route path="*" component={PageNotFound} />
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
