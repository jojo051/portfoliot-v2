import React from 'react';
import{ Link }from 'react-router-dom';

const Foot =()=>{
  return(
    <div className="flex bg-primary text-primary">
      <hr></hr>
      <Link  to='/'>
          <p>RODIER Joël</p>  
      </Link>
      <a href="https://linkedin.com/in/joel-rodier-6280b41a4" target="_blank">Linked In</a>
      <a href="https://github.com/jojo051" target="_blank">Git Hub</a>
    </div>
  )
}
export default Foot;