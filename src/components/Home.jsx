import React from "react";
import Foot from "./Foot";
import Main from "./Main";
import Header from "./Header";

const Home = () => {
  return (
    <div className="bg-primary text-primary max-h-full">
      <Header />
      <Main />
      <Foot />
    </div>
  );
};
export default Home;
