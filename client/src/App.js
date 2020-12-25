import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,Route,
  Switch,
  Redirect
} from "react-router-dom"

import Landing from "./pages/Landing/landing"

import {Container} from 'semantic-ui-react';
function App() {
  return (
    <Container fluid className = "app" style = {{"border": "5px solid purple"}}>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Landing></Landing>
          </Route>
          <Redirect from = "/*" to = "/"/>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
