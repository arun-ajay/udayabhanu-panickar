import styles from 'App.module.scss';
import {
  BrowserRouter as Router,Route,
  Switch,
  Redirect
} from "react-router-dom"

import Landing from "pages/Landing/landing";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import Writing from "pages/writing/writing";
import Auth from "pages/Auth/auth";
import Pdf from 'pages/Article/components/pdf';
import React,{Component} from 'react';
import {Grid} from 'semantic-ui-react';
import history from "./history";
class App extends Component {

  state = {}

  render(){
    return (
  
        <Grid className = {styles.customGrid} padded = "vertically">
            <Router history = {history}>
              <Route component = {Header}/>
              <Switch>
                  <Route exact path = "/" component = {Landing}/>
                  <Route exact path = "/spiritualwritings" component = {(props) => <Writing key = {window.location.pathname}/>}/>
                  <Route exact path = "/historicalwritings" component = {(props) => <Writing key = {window.location.pathname}/>}/>
                  <Route exact path = "/spiritualwritings/article" component = {(props) => <Pdf {...props}/>}/>
                  <Route exact path = "/historicalwritings/article" component = {(props) => <Pdf {...props}/>}/>
                  <Route path = "/auth" component = {Auth}/>
                  <Redirect from = "/home" to = "/"/>
                  <Redirect from = "/*"  to = "/"/>
              </Switch>
            </Router>
        </Grid>
  
    );

  }
}

export default App;
