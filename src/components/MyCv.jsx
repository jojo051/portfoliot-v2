import React from "react";
import Foot from "./Foot";
import Header from "./Header";
import PDFViewer from "pdf-viewer-reactjs";

const MyCv = () => {
  return (
    <div className="bg-primary h-screen">
      <Header />
      <div className="flex justify-center">
        <PDFViewer
          document={{
            url:
              "https://raw.githubusercontent.com/jojo051/portfoliot-v2/main/src/image/RODIERJoel.pdf",
          }}
        />
      </div>
      <Foot />
    </div>
  );
};
export default MyCv;
