import React,{Component} from 'react';
import styles from "./footer.module.scss";

import {Grid,Menu,Button,Card, Image, Segment, TransitionablePortal,Icon} from 'semantic-ui-react'


export default class SiteFooter extends Component{
    state = {
    }
  
    render () { 
        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column width = {16} className = {styles.customColumn}>
                    <Button>
                        hi
                    </Button>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
