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
        <Header></Header>
        <Router>
          <Switch>
            <Route exact path = "/">
              <Landing></Landing>
            </Route>
            <Redirect from = "/*" to = "/"/>
          </Switch>
        </Router>

      </Grid>
    </Container>
  );
}

export default App;
