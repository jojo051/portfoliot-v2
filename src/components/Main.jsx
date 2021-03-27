import React from 'react';
import myhead from '../image/zoomjojo.png';
import Slider from './Slider';

const Main=()=> {
  return (
    <>
      <div className="bg-primary flex space-x-10  mx-10 mt-10">
        <div className="flex items-center w-2/6 ">
          <img 
          src={myhead}
          alt="Rodier joel" 
          />
        </div>
        <div className="w-2/6 flex flex-col justify-center">
          <h2 className="text-2xl"> BIENVENUE </h2>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officiis dolores, amet nemo commodi adipisci rem voluptate cumque deserunt tenetur cum aliquam repudiandae? Ad, perspiciatis! Quae commodi quam labore vero?</p>
        </div>
        <div className="flex-auto">
          <h2 className="text-2xl text-center">SKILL</h2>
          <ul>
            <li className="text-center">Html</li>
            <li className="text-center">Css</li>
            <li className="text-center">Java script</li>
            <li className="text-center">React</li>
            <li className="text-center">Node js</li>
          </ul>
        </div>
      </div>
      <div>
        <Slider/>
      </div>
    </>
  )
}
export default Main;