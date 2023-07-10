import React, { useState } from 'react';
import left from '../images/HomePage/Photo (5).jpg';
import center from '../images/HomePage/Photo (6).jpg';
import right from '../images/HomePage/Photo (7).jpg';
import style from './Juice.module.css'

function Juice(){

   
    const detail = [
        {
            img:left,
            text:"Organic Juice"
        },
        {
            img:center,
            text:"Organic Food"
        },
        {
            img:right,
            text:"Nuts Cookis"
        }
    ]
    const [image ,setImage]=useState(detail)
  return (
    <>
     <div className={`container-fluid p-0 ${style.bgg} pt-5 pb-5` }>
        <div className='row pb-5'>
            {image.map((image)=>
                <div className='col-12 col-md-4 position-relative pt-5 '>
                    <img src={image.img} className='img-fluid'></img>
                    <div className={`bg-light pt-2 rounded-2 ps-4 pe-4 position-absolute top-50 ${style.position}`}>
                    <p className='text-center'>
                        {image.text}
                    </p>
                    </div>
                   
                </div>
            )}
            

        </div>
        
     </div>
    </>
  )
}

export default Juice