import React from 'react';
import projects from '../project.json';
import Carousel from 'react-elastic-carousel';
import {Link} from 'react-router-dom';
import Project from './Project';
const data = projects.projects

const Slider =()=>{

  return(
    
    <div className="flex justify-center" >
      <Carousel className="max-w-screen-sm">
      {data.map((i,index)=>
        <Link key={index} to={`/projects/${i.path}`} >
        <p className="text-center">{i.name}</p> 
        <img
        className="h-full w-auto "
        src={i.imageDemo}
        alt={i.name}
        height="auto"
        width="auto" 
        />
        </Link>
        )}
      </Carousel>
    </div>
  )
}
export default Slider;