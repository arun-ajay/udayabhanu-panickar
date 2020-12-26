import styles from './App.module.scss';
import {
  BrowserRouter as Router,Route,
  Switch,
  Redirect
} from "react-router-dom"

import Landing from "./pages/Landing/landing";
import Header from "./components/header/header";

import {Container,Grid} from 'semantic-ui-react';
function App() {
  return (
    <Container fluid className = {styles.app} style = {{"border": "5px solid purple"}}>
      <Grid className = {styles.customGrid} style = {{"border": "5px solid green"}} padded = "vertically">
        
        <Router>
          <Header></Header>
          <Switch>
              <Route exact path = "/">
                <Landing></Landing>
              </Route>
              <Route exact path = "/aboutme">
                aboutme
              </Route>
              <Route exact path = "/spiritualwritings">
                spiritual writings
              </Route>
              <Route exact path = "/historicalwritings">
                historical writings
              </Route>
              <Redirect from = "/home" to = "/"/>
              <Redirect from = "/*"  to = "/"/>
          </Switch>
        </Router>

      </Grid>
    </Container>
  );
}

export default App;
