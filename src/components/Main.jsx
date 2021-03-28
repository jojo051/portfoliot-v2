import React from "react";
import myhead from "../image/zoomjojo.png";
import Slider from "./Slider";

const Main = () => {
  return (
    <>
      <div className="bg-primary flex flex-col place-items-center px-3 pt-3
        sm:px-5 sm:pt-5
        lg:flex lg:flex-row lg:space-x-5 lg:px-10  ">
        <div className="w-3/6 pb-3 sm:pb-5 sm:w-2/6 lg:w-1/6">
          <img className="" src={myhead} alt="Rodier joel" />
        </div>
        <div className="pb-3 sm:pb-5 sm:">
          <h2 className="text-2xl text-center font-black"> BIENVENUE </h2>
          <p className="text-justify px-5 sm:px-20">
          Après 12 ans de maitre chien à l'armée de l'air en tant que militaire. Passionné d'informatique depuis longtemps. 
          J’ai décidé de donner du sens à ma carrière professionnelle en me reconvertissant dans les métiers du numérique.
          Autodidacte et curieux de nouvelles technologies, je me suis formé aux bases de la programmation (HTML / CSS et le JS). 
          J'ai renforcer mes competence en faisaint un formation de 5 mois à la Wild code scool et un stage de 4 mois dans une start up et ensuite obtenu le <span className="font-black">Titre de Développeur web et web mobile</span>.
          Je suis actuelement à la recherche d'un emploi.
          </p>
        </div>
        <div className="pb-3 sm:pb-5 sm:w-2/6 lg:w-1/6">
          <h2 className="text-2xl text-center font-black">SKILL</h2>
          <ul>
            <li className="text-center">React / Next js</li>
            <li className="text-center">Java script</li>
            <li className="text-center">AWS</li>
            <li className="text-center">Html</li>
            <li className="text-center">Css / Taillwind</li>
            <li className="text-center">Node js</li>
            <li className="text-center">GraphQl / My sql</li>

          </ul>
        </div>
      </div>
      <div className=" bg-primary px-3 py-3">
        <Slider />
      </div>
    </>
  );
};
export default Main;