import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-primary text-primary flex items-center justify-between text-center px-3 py-1 sm:p-5 lg:p-5">
        <Link className="text-2xl" to="/">
          <h1>RODIER Joël</h1>
        </Link>
        <div className="flex justify-end">
          <Link to="/mycv">
            Mon cv
          </Link>
          <Link className="ml-3 sm:ml-3 lg:ml-10" to="/contactme">
            Me contacter
          </Link>
        </div>
      </div>
      <hr/>
    </>
  );
};
export default Header;
