import React from "react";
import myhead from "../image/zoomjojo.png";
import Slider from "./Slider";

const Main = () => {
  return (
    <>
      <div className="bg-primary flex flex-col place-items-center px-3 pt-3
        sm:px-5 sm:pt-5
        lg:flex lg:flex-row lg:space-x-5 lg:px-10  ">
        <div className="w-3/6 pb-3 sm:pb-5 sm:w-2/6">
          <img className="" src={myhead} alt="Rodier joel" />
        </div>
        <div className="pb-3 sm:pb-5 sm:">
          <h2 className="text-2xl text-center font-black"> BIENVENUE </h2>
          <p className="text-justify px-5 sm:px-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            officiis dolores, amet nemo commodi adipisci rem voluptate cumque
            deserunt tenetur cum aliquam repudiandae? Ad, perspiciatis! Quae
            commodi quam labore vero?
          </p>
        </div>
        <div className="pb-3 sm:pb-5 sm:w-2/6">
          <h2 className="text-2xl text-center font-black">SKILL</h2>
          <ul>
            <li className="text-center">React</li>
            <li className="text-center">Java script</li>
            <li className="text-center">Aws</li>
            <li className="text-center">Html</li>
            <li className="text-center">Css</li>
            <li className="text-center">Node js</li>
            
          </ul>
        </div>
      </div>
      <hr/>
      <div className="px-3 py-3">
        <h1 className="text-2xl text-center font-black ">Mes projets</h1>
        <Slider />
      </div>
    </>
  );
};
export default Main;
