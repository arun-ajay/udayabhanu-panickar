import React,{Component} from 'react';
import styles from "./auth.module.scss";
import {Grid,Loader,Header,Icon} from 'semantic-ui-react';
import AxiosInstance from "utils/axios";
import {getUser} from "utils/api";
import { Document } from 'react-pdf';


export default class SiteFooter extends Component{


    state = {
        loginState: "loading"
    }


    getUserData = () => {


        AxiosInstance.interceptors.request.use(
            config => {
                if(localStorage.getItem("accessToken")) {
                    config.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`;
                }
                return config;
            }

        )

        getUser(null)
        .then((response) => {
            console.log(response.data)
            if (response.status === 200){
                console.log(response.data)
                localStorage.setItem("firstName",response.data["firstName"])
                localStorage.setItem("lastName",response.data["lastName"])
                localStorage.setItem("profilePicture",response.data["profilePicture"])
                localStorage.setItem("group",response.data["group"])
                localStorage.setItem("isLoggedIn",true)
                this.props.history.replace({"pathname":"/"})
            }
            else{
                console.log("SERVER ERROR",response)
            }

        })
        .catch((error) => {
            console.log("CLIENT Error",error)
            console.log(error.response)
            this.setState({
                loginState: "error"
            })
        })

    }
    
    async componentWillMount () {
        var url = window.location.href
        var hashes = url.split("#")[1]
        localStorage.setItem("accessToken",new URLSearchParams(hashes).get('access_token'))
        localStorage.setItem("idToken",new URLSearchParams(hashes).get('id_token'))
        this.getUserData()
    }

    
    render () {

        var loginState = () =>{
            if (this.state.loginState == "loading"){
                return (
                    <Loader inverted active size = 'massive' inline = 'centered'>Logging You In...</Loader>

                )
            }
            else if (this.state.loginState == "error"){
                return (
                    <div>
                    <Header inverted as='h2' icon>
                      <Icon name='user x' />
                      Sorry, we're unable to log you in at this time.
                      <Header.Subheader>
                        Please check again later
                      </Header.Subheader>
                    </Header>
                    </div>
                )
            }
        }
      
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column textAlign = {"center"} width = {16}>
                        {loginState()}
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
