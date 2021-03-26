import React from 'react';
import { Link } from 'react-router-dom';

const Header =()=>{
  return(
    <>
      <div className="flex  bg-primary text-primary" >
        <Link className="text-2xl" to='/'>
            <h1  >RODIER Joël</h1>  
        </Link>
        <Link className="text-base" to='mycv'>
            Mon cv  
        </Link>
        <Link className="text-base" to="/contactme">
            Me contacter
        </Link>
      </div>
      <hr></hr>
    </>
  )
}
export default Header;