import React from 'react';
import Foot from "./Foot";
import Header from "./Header";
import PDFViewer from 'pdf-viewer-reactjs';

const MyCv =()=>{
  return(
    <>
      <Header/>
      <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }}
        />
      <Foot/>
    </>
  )
}
export default MyCv;