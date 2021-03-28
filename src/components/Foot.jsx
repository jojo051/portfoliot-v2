import React from "react";
import { Link } from "react-router-dom";

const Foot = () => {
  return (
    <div className="">
      <hr></hr>
      <div className="bg-primary text-primary flex items-center justify-between text-center px-3 py-1 sm:p-5 lg:p-5">
        <Link className="text-2xl" to="/">
          <p>RODIER Joël</p>
        </Link>
        <div className="flex justify-end">
          <a
            className=""
            href="https://linkedin.com/in/joel-rodier-6280b41a4"
            target="_blank"
          >
            Linked In
          </a>
          <a className="ml-3 sm:ml-3 lg:ml-10" href="https://github.com/jojo051" target="_blank">
            Git Hub
          </a>
        </div>
      </div>
    </div>
  );
};
export default Foot;
