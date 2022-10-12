import React from "react";
import Foot from "./Foot";
import Header from "./Header";
import RODIERJoel from "../image/RODIERJoel.bmp";

const MyCv = () => {
  return (
    <div className="bg-primary ">
      <Header />
      <div className="flex justify-center" >
      <img className="flex " src={RODIERJoel} alt="cv rodier joel" />
      </div>
      <Foot />
    </div>
  );
};
export default MyCv;
