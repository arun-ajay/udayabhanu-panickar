import React,{Component} from 'react';
import styles from  "components/header/header.module.scss"


import {Link} from "react-router-dom";

import {Grid,Menu,Button,Card, Image, Segment, TransitionablePortal,Icon} from 'semantic-ui-react'

import {menuJson} from "./data"


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
        var path = null
        if (window.location.pathname === "/"){
            path = "Home"
        }
        else if (window.location.pathname === "/aboutme"){
            path = "About Me"
        }
        else if (window.location.pathname.startsWith("/spiritualwritings")){
            path = "Spiritual Writings"
        }
        else if (window.location.pathname.startsWith("/historicalwritings")){
            path = "Historical Writings"
        }
        this.setState({
            activeItem: path
        })
    }
    render () { 
        const {activeItem} = this.state
        var menuArray = menuJson.map((data,index) => {
            if (data.hasOwnProperty("name")){
                return <Menu.Item
                name = {data.name}
                as = {Link}
                to = {data.to}
                active = {activeItem === data.name}
                onClick = {this.handleItemClick}>
                    {data.display}
                </Menu.Item>
            }
            else{
                return <Menu.Item header>{data.display}</Menu.Item>
            }
        })
        
        


        
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
