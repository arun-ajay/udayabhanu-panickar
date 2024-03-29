import React,{Component} from 'react';
import styles from './landing.module.scss';

import UdayabhanuPhoto from "pages/Landing/assets/Udayabhanu.jpg"
import { pdfjs} from "react-pdf";

import {Grid,Card,Transition,Image,Container} from 'semantic-ui-react'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default class Landing extends Component{

    state = {

        englishDescription : "I am a Seeker of truthful History; so, I look for that in the wider spectrum  and more"+ 
        "in the unscripted annals of history, not just in the "+ 
        "scripted history written by special interest groups.",
         malayalamDescription : "ഞാൻ സത്യമായ ചരിത്രം അന്വേഷിക്കുന്ന ചരിത്രാന്വേഷി. അതിനായി, ചിലർ സ്വന്തം കാര്യസാദ്ധ്യത്തിനായി,"+ 
        " ചരിത്രം നിർമ്മിക്കാൻ വേണ്ടി എഴുതിയ ചരിത്രത്തേക്കാൾ കൂടുതലായി, ചരിത്രവ്യക്തിത്വങ്ങളുടെ സ്വകാര്യ ലിഖിതങ്ങളിൽ തേടുന്നു.",
        open: false
    }


    componentDidMount(){
        this.setState({open: true})
    }
    render () { 
        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column className = {styles.customColumn} verticalAlign = {"middle"} width ={4}>
                    <Transition
                            animation = "fade right"
                            duration = {700}
                            visible = {this.state.open}
                            >
                                <Card centered >
                                    <Image src= {UdayabhanuPhoto} wrapped ui={false} />
                                </Card>
                        </Transition>
                </Grid.Column>

                <Grid.Column verticalAlign={"middle"} className = {styles.customColumn} width = {12}>
                    <Transition
                        animation = "fade left"
                        duration = {700}
                        visible = {this.state.open}
                        >
                        <Container fluid>
                            <Container fluid textAlign = 'justified'>
                                <h1 className = {styles.englishQuote}> 
                                    {this.state.englishDescription}
                                        <br></br>
                                        <br></br>
                                    {this.state.malayalamDescription}
                                </h1>
                            </Container>
                            <Container fluid textAlign = "right">
                                <h2 className = {styles.author}>
                                <br></br>
                                - Udayabhanu Panickar

                                </h2>
                            </Container>

                        </Container>
                    </Transition>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
