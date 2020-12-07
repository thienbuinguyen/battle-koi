import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
