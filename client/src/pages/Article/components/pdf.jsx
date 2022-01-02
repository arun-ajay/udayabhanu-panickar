import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import styles from "pages/Article/components/pdf.module.scss"
import {Grid,Pagination, Header, Icon,Dimmer, Loader} from 'semantic-ui-react'
import {getWriting} from 'utils/api'

function Pdf(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfLink,setPdfLink] = useState(null)
  const [pdfTitle,setPdfTitle] = useState(null)
  const [pdfDate,setPdfDate] = useState(null)
  const [open, setOpen] = useState(false);
  const [articleState,setArticleState] = useState('loading')


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages, () => {
      setOpen(true)
    });
  }

  function pageChange(e,data){
    console.log("CHANGE",data.activePage)
    setPageNumber(data.activePage)
  }


  useEffect(() => { 
    var search  = window.location.search
    var params = new URLSearchParams(search)
    console.log("ps",params,params.get('id'),params.has('id'))
    if (params.has('id')){

      var pathName = window.location.pathname
      var arr = pathName.split('/')
      var id = params.get('id')
      var params = {
          params:{
              "path": arr[1],
              "id": id
          }
      }
      getWriting(params)
      .then((response) => {
          if (response.status === 200){
              var data = response["data"]
              setPdfLink(data["pdf"])
              setPdfTitle(data["title"])
              setPdfDate(data["date"])
              setArticleState("loaded")
          }
          else{
            setArticleState("unavailable")
          }

      })
      .catch((error) => {
          console.log("CLIENT Error",error)
          console.log(error.response)
          setArticleState("unavailable")
      })

    }
    else{
      //do some error here
      setArticleState("unavailable")
    }
  },[articleState])

  console.log("articlestate",{articleState})
  switch (articleState){
    case 'loading':
      return(
        <Grid.Row className = {styles.customRow}>
          <Grid.Column width = {4} />
          <Grid.Column  textAlign = {"center"} width = {8}>
              <Loader  active size = 'massive' inline = 'centered'>Fetching Writing...</Loader>
          </Grid.Column>
        </Grid.Row>
      )
      break;
    case "unavailable":
      return(
        <Grid.Row className = {styles.customRow}>
          <Grid.Column width = {4} />
          <Grid.Column  textAlign = {"center"} width = {8}>
            <Header as='h2' icon>
              <Icon name='exclamation circle' />
              This writing does not exist
            </Header>
          </Grid.Column>
        </Grid.Row>
      )
    break
    case "loaded":
      return(
        <Grid.Column textAlign = {"center"}  width = {16}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <Document
                    file= {pdfLink}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber} />
                  </Document>
              </div>
              <Pagination onPageChange = {pageChange} defaultActivePage={1} totalPages={numPages} />
        </Grid.Column>
      )
    break
    default:
      return <Grid.Column textAlign = {"center"}  width = {16}>
            
      </Grid.Column>
  }
  

}

export default Pdf;