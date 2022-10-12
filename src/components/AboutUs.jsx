import React from "react";
import Foot from "./Foot";
import Header from "./Header";
import linkedin from "../image/linkedin.png";
import github from "../image/github.png";

const AboutUs = () => {
  return (
    <section className="bg-primary text-primary h-screen">
      <Header />
      <div className="flex flex-col items-center pb-10">
        <h1 className="text-2xl text-center pt-10 " >Me contacter</h1>
        <a className="text-center pt-3" href="mailto:rodier.joel1@gmail.com">E-mail</a>
        <p className="text-center pt-3">rodier.joel1@gmail.com</p>
        <p className="text-center pt-3" >06 62 65 04 14</p>
        <h2 className="text-2xl pt-10">Voir mon profil</h2>
        <a
          className="text-center pt-3"
          href="https://linkedin.com/in/joël-rodier-6280b41a4"
          target="_blank"
          rel="noreferrer"
        >
        <img className="h-10" src={linkedin} alt="linkedin logo" />
        </a>
        <a
          className="text-center pt-3 "
          href="https://github.com/jojo051"
          target="_blank"
          rel="noreferrer"
        >
        <img className="h-10" src={github} alt="github logo" />
        </a>
      </div>
      <Foot />
    </section>
  );
};
export default AboutUs;