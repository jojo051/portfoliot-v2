import React from "react";
import Foot from "./Foot";
import Header from "./Header";
import { useParams } from "react-router-dom";
import projects from "../project.json";

const data = projects.projects;

const MyProjects = () => {
  const params = useParams();
  const project = data.filter((o)=>o.path === params.id)
  return (
    <div className="bg-primary text-primary h-screen"> 
      <Header />
      <div className="bg-primary text-primary flex flex-col px-3 sm:px-5">
        <h1 className="text-4xl text-center pt-10 font-black">{project[0].name}</h1>
        <div className="flex justify-center space-x-5 pt-10">
        {project[0].image.map((i,index)=> <img key={index} className="w-3/12" src={i.img} alt={project.name}/> )}
        </div>
        <div className="flex items-baseline pt-10">
          <h2 className="text-2xl text-left">Description du projet:</h2>
          <p className="pl-3">{project[0].description}</p>
        </div>
        <div className="flex items-baseline py-5">
          <h2 className="text-2xl text-left">Lien:</h2>
          <a className="pl-2" href={project[0].link} target="_blank" rel="noreferrer">{project[0].link}</a>
        </div>
      </div>
      <Foot />
    </div>
  );
};
export default MyProjects;
