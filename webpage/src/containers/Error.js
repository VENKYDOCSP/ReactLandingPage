import React from 'react';
import Styles1 from './Error.module.css';
import error from '../images/Error/Image (9)-overlay.png';



function Error() {

  return (
    <>

    <div className='position-relative'>
        <img src={error} className='img-fluid'></img>
        <div className={`position-absolute ${Styles1.ptn}`}>
        <p className={`fw-bold display-1 ${Styles1.err}`}>
            404
        </p>
        <p className={` fw-bold display-3 ${Styles1.txt}`}>
            Page Not Found
        </p>
        </div>
        
    </div>
    </>
  )
}

export default Error