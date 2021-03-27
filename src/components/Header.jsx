import React from 'react';
import { Link } from 'react-router-dom';

const Header =()=>{
  return(
    <>
      <div className="bg-primary text-primary flex items-center justify-between mx-10" >
        <Link className="text-2xl" to='/'>
            <h1>RODIER Joël</h1>  
        </Link>
        <div className="flex justify-end mx-5">
          <Link className="mx-5" to='mycv'>
              Mon cv  
          </Link>
          <Link className="mx-5" to="/contactme">
              Me contacter
          </Link>
        </div>
      </div>
      <hr></hr>
    </>
  )
}
export default Header;