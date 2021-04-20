import React from "react";
import Foot from "./Foot";
import Header from "./Header";

const AboutUs = () => {
  return (
    <section className="bg-primary text-primary h-screen">
      <Header />
      <div className="flex flex-col items-center pb-10">
        <h1 className="text-2xl text-center pt-10">Me contacter</h1>
        <a className="text-center pt-3" href="mailto:rodier.joel1@gmail.com">E-mail</a>
        <h2 className="text-2xl pt-10">Voir mon profil</h2>
        <a
          className="text-center pt-3"
          href="https://linkedin.com/in/joel-rodier-6280b41a4"
          target="_blank"
          rel="noreferrer"
        >
          Linked In
        </a>
        <a
          className="text-center pt-3"
          href="https://github.com/jojo051"
          target="_blank"
          rel="noreferrer"
        >
          Git Hub
        </a>
      </div>
      <Foot />
    </section>
  );
};
export default AboutUs;