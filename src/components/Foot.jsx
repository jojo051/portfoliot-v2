import React from 'react';
import{ Link }from 'react-router-dom';

const Foot =()=>{
  return(
    <>
      <hr></hr>
      <div className="bg-primary text-primary flex items-center justify-between mx-10">
          <Link className="text-2xl" to='/'>
              <p>RODIER Joël</p>  
          </Link>
          <div className="flex justify-end mx-5">
          <a className="mx-5" href="https://linkedin.com/in/joel-rodier-6280b41a4" target="_blank">Linked In</a>
          <a className="mx-5" href="https://github.com/jojo051" target="_blank">Git Hub</a>
        </div>
      </div>
    </>
  )
}
export default Foot;