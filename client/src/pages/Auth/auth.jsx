import React,{Component} from 'react';
import styles from "./auth.module.scss";

import {Grid,Menu,Button,Card, Label , Segment, TransitionablePortal,Icon} from 'semantic-ui-react'

import queryString from 'query-string'

export default class SiteFooter extends Component{
    state = {
    }
  
    render () { 
        
        var accessToken = new URLSearchParams(window.location.hash).get('access_token')
        var refreshToken = new URLSearchParams(window.location.hash).get('refresh_token')
        var idToken = new URLSearchParams(window.location.hash).get('id_token')
        console.log("access",accessToken)
        console.log(refreshToken)
        console.log("id",idToken)
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column width = {16}>
                    test
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
