import React from "react";
import Foot from "./Foot";
import Header from "./Header";
import RODIERJoel from "../image/RODIERJoel.png";
//import PDFViewer from "pdf-viewer-reactjs";

const MyCv = () => {
  return (
    <div className="bg-primary ">
      <Header />
      <div className="flex justify-center" >
      <img className="flex " src={RODIERJoel} alt="cv rodier joel" />
      {/* <div className="flex justify-center">
        <PDFViewer
          document={{
            url:
              "https://raw.githubusercontent.com/jojo051/portfoliot-v2/main/src/image/RODIERJoel.pdf",
          }}
        />
      </div> */}
      </div>
      <Foot />
    </div>
  );
};
export default MyCv;
