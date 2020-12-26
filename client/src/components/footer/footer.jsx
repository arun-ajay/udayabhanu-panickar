import React,{Component} from 'react';
import styles from "./footer.module.scss";

import {Grid,Menu,Button,Card, Label , Segment, TransitionablePortal,Icon} from 'semantic-ui-react'


export default class SiteFooter extends Component{
    state = {
    }

    handleFooterLabelClick = () => {
        window.open("https://github.com/arun-ajay","_blank")
    }
  
    render () { 
        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column textAlign = {"center"} verticalAlign = {"middle"} width = {16} className = {styles.customColumn}>
                    <Button  labelPosition= {"left"} onClick = {this.handleFooterLabelClick}>
                        <Label circular  icon = {"github"} color = {"black"}/>
                        <Button compact circular animated = {"vertical"} color = {"black"}>
                            <Button.Content visible>
                                Arun Ajay
                            </Button.Content>
                            <Button.Content hidden>
                                Site Creator
                            </Button.Content>
                        </Button>
                    </Button>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
