import React,{Component} from 'react';
import styles from "./header.module.scss";

import LoginPhoto from "./assets/login.jpg"

import {Grid,Menu,Button,Card, Image, Segment, TransitionablePortal,Icon} from 'semantic-ui-react'

export default class SiteHeader extends Component{
    state = {
        portal : false
    }
  

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentDidMount(){
        this.setState({open: true})
    }
    render () { 

        const {activeItem} = this.state

        const {portal} = this.state
        
        return(
            <Grid.Row>
                <Grid.Column width = {16}>
                    <Menu borderless stackable className = {styles.customMenu}>
                        <Menu.Item header>Udayabhanu Panickar</Menu.Item>
                        <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        className = {this.state.activeItem == "home" ? styles.customMenuSelected : styles.customMenu}
                        >
                            <Icon name = 'home'/>
                        </Menu.Item>
                        <Menu.Item
                        name='About Me'
                        active={activeItem === 'About Me'}
                        onClick={this.handleItemClick}
                        className = {this.state.activeItem == "About Me" ? styles.customMenuSelected  : styles.customMenu}
                        />
                        <Menu.Item
                        name='Spiritual Writings'
                        active={activeItem === 'Spiritual Writings'}
                        onClick={this.handleItemClick}
                        className = {this.state.activeItem == "Spiritual Writings" ? styles.customMenuSelected  : styles.customMenu}
                        />
                        <Menu.Item
                        name='Historical Writings'
                        active={activeItem === 'Historical Writings'}
                        onClick={this.handleItemClick}
                        className = {this.state.activeItem == "Historical Writings" ? styles.customMenuSelected  : styles.customMenu}
                        />
                        <Menu.Menu stackable position='right'>
                            <Menu.Item
                            >
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
                                    <Image src= {LoginPhoto} wrapped ui={false} />
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
