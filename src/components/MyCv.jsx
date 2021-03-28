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
                url: 'https://raw.githubusercontent.com/jojo051/portfoliot-v2/main/src/image/CocktailParadiseAcceuil.png',
            }}
        />
      <Foot/>
    </>
  )
}
export default MyCv;