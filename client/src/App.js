import styles from 'App.module.scss';
import {
  BrowserRouter as Router,Route,
  Switch,
  Redirect
} from "react-router-dom"

import Landing from "pages/Landing/landing";
import Header from "components/header/header";
import Footer from "components/footer/footer"
import Writing from "pages/writing/writing";
import React,{Component} from 'react';

import {Grid} from 'semantic-ui-react';
class App extends Component {

  state = {}

  render(){
    return (
  
        <Grid className = {styles.customGrid} padded = "vertically">
          
          <Router>
            <Route component = {Header}/>
            <Switch>
                <Route exact path = "/" component = {Landing}/>
                <Route exact path = "/aboutme">
                  aboutme
                </Route>
                <Route path = "/spiritualwritings" component = {(props) => <Writing key = {window.location.pathname}/>}/>
                <Route path = "/historicalwritings" component = {(props) => <Writing key = {window.location.pathname}/>}/>
                <Redirect from = "/home" to = "/"/>
                <Redirect from = "/*"  to = "/"/>
            </Switch>
            <Footer></Footer>
          </Router>
  
        </Grid>
  
    );

  }
}

export default App;
