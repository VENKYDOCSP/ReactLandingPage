import React from 'react';
import leftCard from '../images/HomePage/Photo (2).jpg';
import rightCard from '../images/HomePage/Photo (3).jpg';
import style from './Card.module.css'

function Card(){
  return (
    <>

    <div className='row mt-5 d-flex justify-content-center '>
        <div className='col-9 col-md-6 col-lg-4 position-relative'>
            <div className='mt-5'>
                <img src={leftCard} className='img-fluid rounded-5'></img>
                <div className={`col-md-6 col-lg-5 position-absolute d-flex justify-content-lg-start flex-column text-left ${style.position}`}>
                    <p className={`fs-2 ${style.font1}`}><em>Natural!!</em> </p>
                    <p className={`fw-bold text-light fs-4  text-wrap`}>Get Garden Fresh Fruits</p>
                </div>
            </div>
        </div>
        <div className=' col-9 col-md-6 col-lg-4 position-relative '>
            <div className='mt-5 mb-5'>
                <img src={rightCard} className='img-fluid rounded-5 '></img>
                <div  className={`col-md-6 col-lg-5 position-absolute d-flex justify-content-lg-start flex-column text-left ${style.position}`}>
                    <p className={ `fs-2 ${style.font2}`}>
                   <em>Offer!!</em> 
                    </p>
                    <p className={`fw-bold text-green fs-4 text-warp  ${style.font3}`}>Get 10% off on Vegetables</p>
                </div>
            </div>
        </div>

    </div>
    
    </>

    
  )
}



export default Card
// function About(){
//     return(
//         <>
//         </>
//     )
// }

// export default About