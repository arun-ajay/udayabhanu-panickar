import React,{Component} from 'react';
import './header.css';

import {Grid,Card,Transition,Image,Container} from 'semantic-ui-react'

export default class Header extends Component{



    componentDidMount(){
        this.setState({open: true})
    }
    render () { 
        
        return(
            <Grid.Row style = {{"border":"5px solid green"}}>
                HEADER STUFF HERE!
            </Grid.Row>
        )
    } 
}
