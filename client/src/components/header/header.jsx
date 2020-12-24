import React,{Component} from 'react';
import './header.css';

import {Grid,Menu} from 'semantic-ui-react'

export default class Header extends Component{
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentDidMount(){
        this.setState({open: true})
    }
    render () { 

        const {activeItem} = this.state
        
        return(
            <Grid.Row>
                <Grid.Column width = {16}>
                    <Menu stackable class = "customMenu">
                        <Menu.Item header>Udayabhanu Panickar</Menu.Item>
                        <Menu.Item
                        name='About Me'
                        active={activeItem === 'About Me'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Spiritual Writings'
                        active={activeItem === 'Spiritual Writings'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Historical Writings'
                        active={activeItem === 'Historical Writings'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Menu stackable position='right'>
                            <Menu.Item
                                name='signup'
                                active={activeItem === 'signup'}
                                onClick={this.handleItemClick}
                            >
                                Sign In
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
