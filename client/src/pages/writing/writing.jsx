import React,{Component} from 'react';
import styles from "pages/writing/writing.module.scss";
import { pdfjs} from "react-pdf";
import {getWritings,getWriting} from 'utils/api'
import {Grid,Card,Transition,Container,Segment,Loader} from 'semantic-ui-react'


import {Redirect} from 'react-router';




export default class Writing extends Component{



    state = {
        open : false,
        articles: null,
        redirect: false
    }

    visitWriting = (path)  =>{
        this.setState({
            path: path,
            redirect: true
        })
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
            if (response.status === 200){
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
            console.log(error.response)
        })

    }

    async componentDidMount(){
        this.writings()

    }

    render () {

        if (this.state.redirect){
            return <Redirect push to = {this.state.path}/>
        }
        
    

        if (this.state.articles){
            if (this.state.articles.length >0){
                var cardArray = this.state.articles.map((data,index) => {
                    console.log(data)
                    console.log(window.location.pathname)
                    var newPath = window.location.pathname + "/article" + "?id=" + data["id"]
                   return  <Transition
                        animation = "vertical flip"
                        duration = {500+(index)*20}
                        visible = {this.state.open}
                    >
                        <Card onClick= { () => this.visitWriting(newPath)} color = {"blue"}  >
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
                        <Segment size = {"big"} inverted secondary raised compact>
                            {cardArray}
                        </Segment>
                    </Grid.Column>
                }

                
            </Grid.Row>
        )
    } 
}
