import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import MilkshakeJump from './components/milkshake-jump';
import PageNotFound from './components/page-not-found';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/milkshake-jump">
          <MilkshakeJump/>
        </Route>
        {/* <Redirect from="/" to="/home"/> */}
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
