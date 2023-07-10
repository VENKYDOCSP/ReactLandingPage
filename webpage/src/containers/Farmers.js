import React from 'react';
import frame from '../images/HomePage/Photo (8).png'
import stylee from './Farmers.module.css';
import stylee1 from './Card.module.css';
import arrow from '../images/HomePage/Aerrow.svg';
import Food from '../images/HomePage/Icon.png';
import Post from '../images/HomePage/Icon (1).png';
// import {useNavigate} from "react-router-dom";


function Farmers() {

// const navigate = useNavigate()

  return (
    <>
    <div className={`row container-fluid  mt-5 ${stylee.bgg}`}>
      <div className='col-12 col-md-6 container mt-5'>
        <img src={frame} className=' img-fluid'></img>
      </div>
      <div className='col-12 col-lg-6 mt-5 d-flex flex-column justify-content-lg-start justify-content-center align-items-lg-start align-items-center '>
        <div className=' col-12 col-lg-2 mt-5 text-center'>
          <p className={`fs-4 ${stylee1.font2}`} ><em>About Us</em></p>
        </div>
        <div className={`col-12 col-lg-7 fs-2 d-flex justify-content-lg-start justify-content-center align-items-lg-start align-items-center ${stylee1.font3}`}>
          <p>We Believe in Working Accredited Farmers</p>
        </div>
        <div className='col-12 col-lg-10 text-lg-left '>
          <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
          <div className=' col-md-8 mt-2 gap-lg-3  d-flex justify-content-lg-between justify-content-center align-items-center'>
              <img src={Food} className='img-fluid'></img>
            <div>
              <div>
              <p className={`fs-5 ${stylee1.font3}`}>Organic Foods Only</p>
              <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
              </div>
            </div>
        </div>
        <div className='col-md-8 mt-2 gap-3  d-flex justify-content-between align-items-center'>
              <img src={Post} className='img-fluid'></img>
            <div>
              <div>
              <p className={`fs-5 ${stylee1.font3}`}>Quality Standards</p>
              <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
              </div>
            </div>
        </div>
        <div className='d-flex justify-content-start mt-2'>
                <button className={`btn  rounded-2 text-light ${stylee.btn}`} type='button'>Shop now<img src={arrow} className='img-fluid'></img> </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Farmers