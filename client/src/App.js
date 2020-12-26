import styles from './App.module.scss';
import {
  BrowserRouter as Router,Route,
  Switch,
  Redirect
} from "react-router-dom"

import Landing from "./pages/Landing/landing";
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import Writing from "./pages/writing/writing";

import {Container,Grid} from 'semantic-ui-react';
function App() {
  return (

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
                <Writing></Writing>
              </Route>
              <Route exact path = "/historicalwritings">
                <Writing></Writing>
              </Route>
              <Redirect from = "/home" to = "/"/>
              <Redirect from = "/*"  to = "/"/>
          </Switch>
          <Footer></Footer>
        </Router>

      </Grid>

  );
}

export default App;
