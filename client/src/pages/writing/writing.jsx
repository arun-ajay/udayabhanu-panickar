import React,{Component} from 'react';
import styles from './writing.module.scss';



import {Grid,Card,Transition,Image,Container} from 'semantic-ui-react'

export default class Writing extends Component{

    state = {
        open : false,
        redirectWriting: false,
        redirectSubmitter: false,
        data: null
    }

    componentDidMount(){
        this.setState({
            open: true
            }
        )
    }

    redirectToWriting = (data) => {
        this.setState({
            redirectWriting: true,
            data: data
        })
    }

    redirectToSubmitter = () =>{
        this.setState({
            redirectSubmitter:true
        })
    }

    render () { 

        var articles = Array(15).fill({
            header: "Article",
            meta : "Date",
            description : "Quick Summary",
            content: "This is the actual content"
        })

        var auth = true;
    
        var cardArray = articles.map((data,index) => {
           return  <Transition
                animation = "vertical flip"
                duration = {500+(index)*20}
                visible = {this.state.open}
            >
                <Card link color = {"blue"} onClick = {() => this.redirectToWriting(data)}>
                    <Card.Content textAlign = {"center"}>
                        <Card.Header>
                            {data.header + " " + index}
                        </Card.Header>
                        <Card.Meta>
                            {data.meta + " " + index}
                        </Card.Meta>
                        <Card.Description>
                            {data.description + " " + index}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Transition>
        })
        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column className = {styles.customColumn} width ={16}>
                <Card.Group stackable itemsPerRow = {4}>
                        {cardArray}
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
