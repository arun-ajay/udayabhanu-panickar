import React,{Component} from 'react';
import styles from "pages/writing/writing.module.scss";

 import {getWritings,getWriting} from 'utils/api'

import {Grid,Card,Transition,Container,Segment,Loader} from 'semantic-ui-react'

import queryString from 'query-string'

export default class Writing extends Component{

    state = {
        open : false,
        articles: null
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
                }, () => {
                    this.setState({
                        open:true
                    })
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
        this.writings()

    }

    render () { 

        var auth = true;
    
        if (this.state.articles){
            if (this.state.articles.length >0){
                var cardArray = this.state.articles.map((data,index) => {
                   return  <Transition
                        animation = "vertical flip"
                        duration = {500+(index)*20}
                        visible = {this.state.open}
                    >
                        <Card link color = {"blue"}>
                            <Card.Content textAlign = {"center"}>
                                <Card.Header>
                                    {data.title}
                                </Card.Header>
                                <Card.Meta>
                                    {data.date}
                                </Card.Meta>
                                <Card.Description>
                                    {data.quicksummary}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Transition>
                })
            }
            else{
                cardArray = null
            }
        }
        else{
            var cardArray = (
                    <Loader inverted active size = 'massive' inline = 'centered'>Fetching Data...</Loader>
                    )
        }
        
        return(
            <Grid.Row className = {styles.customRow}>
                {
                    this.state.articles
                    ?
                    <Grid.Column width ={16}>

                        <Card.Group stackable itemsPerRow = {6}>
                                {cardArray}
                        </Card.Group>
                    </Grid.Column>
                    :
                    <Grid.Column textAlign = {"center"} className = {styles.customColumn} width ={16}>
                        <Segment size = {"big"} inverted secondary raised compact className = {styles.customSegment}>
                            {cardArray}
                        </Segment>
                    </Grid.Column>


                }
            </Grid.Row>
        )
    } 
}
