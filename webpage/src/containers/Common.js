import React from 'react';
import common from '../images/HomePage/Photo (8).jpg'
import style from './Common.module.css'

function Common(){
  return (
    <>

    <div className={`container d-flex jjustify-content-center align-items-center position-relative ${style.mar} `}>
        <div className='mt-5  '>
            <img src={common} className='img-fluid rounded-4 '></img>
        </div>
        <div className='d-flex justify-content-lg-around justify-content-center align-items-center position-absolute mt-5 container'>
            <p className='text-light fs-2 fw-bold col-lg-3 col-6'>Subscribe to our Newsletter</p>
            <div className='d-flex gap-2 '>
                <div className='pe-3 d-flex justify-content-center'>
                <input className={`form-control text-center ${style.ht}`} placeholder='Your Email Address'/>
                <button className='btn btn-primary ' type='submit'> Subscribe</button>
                </div>
            </div>
        </div>
        
    </div>


    
    
    </>
  )
}

export default Common