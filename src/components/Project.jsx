import React from "react";
import Foot from "./Foot";
import Header from "./Header";
import { useParams } from "react-router-dom";
import projects from "../project.json";

const data = projects.projects;

const MyProjects = () => {
  const params = useParams();
  
  const project = data.map((project)=>project).filter((o)=>o.path === params.id)
  console.log(project,params.id)
  return (
    <div className="bg-primary text-primary h-screen max-h-full"> 
      <Header />
      <div>
        <h1 className="text-4xl text-center mt-10 font-black">{params.id}</h1>
        <div className="flex justify-center space-x-10 mt-10">
        {project[0].image.map((i)=> <img className="w-2/12" src={i.img} alt={project.name} /> )}
        </div>
        <div className="flex items-baseline mt-10 ml-52">
          <h2 className="text-2xl text-center" >Description du projet:</h2>
          <p className="pl-2">{project[0].description}</p>
        </div>
        <div className="flex items-baseline my-5 ml-52">
          <h2 className="text-2xl text-center">Lien:</h2>
          <a className="pl-2" href={project[0].link} target="_blank"> {project[0].link}</a>
        </div>
      </div>
      <Foot />
    </div>
  );
};
export default MyProjects;
