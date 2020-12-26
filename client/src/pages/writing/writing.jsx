import React,{Component} from 'react';
import styles from './writing.module.scss';



import {Grid,Card,Transition,Image,Container} from 'semantic-ui-react'

export default class Writing extends Component{

    state = {
    }


    componentDidMount(){
        this.setState({open: true})
    }
    render () { 
        
        return(
            <Grid.Row className = {styles.customRow} style = {{"border": "5px solid yellow"}}>
                <Grid.Column className = {styles.customColumn} verticalAlign = {"middle"} width ={16}>
                    hi
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
