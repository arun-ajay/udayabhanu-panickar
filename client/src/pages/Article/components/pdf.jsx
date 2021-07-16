import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import {Grid,Pagination, Transition} from 'semantic-ui-react'

function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = useState(false)


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages, () => {
      setOpen(true)
    });
  }

  function pageChange(e,data){
    console.log("CHANGE",data.activePage)
    setPageNumber(data.activePage)
  }

  return (
    
    <Grid.Column textAlign = {"center"} style = {{"border": "5px solid red"}} width = {16}>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <Document
                file= "https://udayabhanu.s3.amazonaws.com/test2.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
          </div>
          <Pagination onPageChange = {pageChange} defaultActivePage={1} totalPages={numPages} />
    </Grid.Column>
  );
}

export default Pdf;