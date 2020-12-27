import React,{Component} from 'react';
import styles from "pages/writing/writing.module.scss";

 import {getWritings,getWriting} from 'utils/api'

import {Grid,Card,Transition,Image,Container} from 'semantic-ui-react'

import queryString from 'query-string'

export default class Writing extends Component{

    state = {
        open : false,
        articles: []
    }

    writings = () => {    

        var pathName = window.location.pathname.substring(1)
        var params = {
            params:{
                "path": pathName
            }
        }
        getWritings(params)
        .then((response) => {
            console.log(response.data)
            if (response.status === 200){
                console.log(response.data)
                this.setState({
                    articles: response.data["data"]
                })
            }
            else{
                console.log("SERVER ERROR",response)
            }

        })
        .catch((error) => {
            console.log("CLIENT Error",error)
        })

    }

    async componentDidMount(){
        this.setState({
            open: true
            }
        )
        this.writings()

    }

    render () { 

        var articles = Array(15).fill({
            header: "Article",
            meta : "Date",
            description : "Quick Summary",
            content: "This is the actual content"
        })

        var auth = true;
    
        var cardArray = this.state.articles.map((data,index) => {
           return  <Transition
                animation = "vertical flip"
                duration = {500+(index)*20}
                visible = {this.state.open}
            >
                <Card link color = {"blue"}>
                    <Card.Content textAlign = {"center"}>
                        <Card.Header>
                            {data.title + " " + index}
                        </Card.Header>
                        <Card.Meta>
                            {data.date + " " + index}
                        </Card.Meta>
                        <Card.Description>
                            {data.quicksummary + " " + index}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Transition>
        })
        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column className = {styles.customColumn} width ={16}>
                <Card.Group stackable itemsPerRow = {3}>
                        {cardArray}
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
