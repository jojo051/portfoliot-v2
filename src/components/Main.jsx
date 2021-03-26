import React from 'react';
import myhead from '../image/myhead.png';
import Slider from './Slider';

const Main=()=> {
  return (
    <>
      <div className="flex space-x-10  mx-10">
        <div className="flex items-center">
          <img 
          src={myhead}
          alt="Rodier joel" 
          />
        </div>
        <div>
          <h2> BIENVENU </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officiis dolores, amet nemo commodi adipisci rem voluptate cumque deserunt tenetur cum aliquam repudiandae? Ad, perspiciatis! Quae commodi quam labore vero?</p>
        </div>
        <div>
          <h2>SKILL</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVA SCRIP</li>
            <li>REACT</li>
            <li>NODE JS</li>
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