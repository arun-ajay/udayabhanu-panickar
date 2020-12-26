import React,{Component} from 'react';
import styles from "./header.module.scss";

import LoginPhoto from "./assets/login.jpg"


import {Link} from "react-router-dom";

import {Grid,Menu,Button,Card, Image, Segment, TransitionablePortal,Icon} from 'semantic-ui-react'

import {menuArray} from "./data"

export default class SiteHeader extends Component{
    state = {
        activeItem : null
    }
  

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        console.log("redirecting");
    }

    componentDidMount(){
        this.setState({open: true})
    }
    render () { 

        const {activeItem} = this.state
        


        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column width = {16} className = {styles.customColumn}>
                    <Menu borderless stackable className = {styles.customMenu}>
                        {menuArray}
                        <Menu.Menu stackable position='right'>
                            <Menu.Item>
                                <TransitionablePortal
                                transition={{
                                    animation: 'zoom',
                                    duration: 300

                                }}
                                trigger={
                                    <Button icon labelPosition='right' color = 'blue'>
                                      Sign in
                                      <Icon name='sign in alternate' />
                                    </Button>
                                }
                                >
                                    <Card className = {styles.login}>
                                        <Card.Content textAlign = {"center"}>
                                            <Card.Header>Sign In With</Card.Header>
                                        </Card.Content>
                                            <Card.Content extra textAlign = {"center"}>
                                                <Button circular color='facebook' icon='facebook' />
                                                <Button circular color='twitter' icon='twitter' />
                                                <Button circular color='linkedin' icon='linkedin' />
                                                <Button circular color='google plus' icon='google' />
                                            </Card.Content>
                                    </Card>
                                </TransitionablePortal>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
