import React, { useState } from 'react';
import style from './Organic.module.css';
import arrow from '../images/HomePage/Aerrow.svg';
import stylee1 from './Card.module.css';
import Star from '../images/HomePage/Star.svg';
import img from '../images/HomePage/Photo (15).png';
import img1 from '../images/HomePage/Photo (16).png';
import img2 from '../images/HomePage/Photo (17).png';
import img3 from '../images/HomePage/Photo (18).png';
// import style from './Products.module.css';


function Organic() {

    const Vegetable =[
            {
                TitleCard: "Vegetable",
                Image: img,
                Name: "Mung Bean",
                price1: "$20.00",
                price2: "$13.00",
                Star: Star
              },
              {
                TitleCard: "Vegetable",
                Image: img1,
                Name: "Brown Hazelnut",
                price1: "$20.00",
                price2: "$14.00",
                Star: Star
              },
              {
                TitleCard: "Vegetable",
                Image: img2,
                Name: "Onion",
                price1: "$20.00",
                price2: "$15.00",
                Star: Star
              },
              {
                TitleCard: "Vegetable",
                Image: img3,
                Name: "Cabbage",
                price1: "$20.00",
                price2: "$17.00",
                Star: Star
              }
    ]
    const [vegetables , setVegetables]=useState(Vegetable)
  return (
    <>

    <div className={`${style.bg} pt-5 pb-5 ` }>
        <div className='container pb-5 '>
        <div className='row d-flex justify-content-center align-items-center '>
            <div className='pt-5 d-flex flex-column justify-content-between '>
                <div className='d-flex col-4 '>
                <p className={`fs-4 text-light ${stylee1.font2}`}><em>Offer</em> </p>
                </div>
                <div className='d-flex  justify-content-between '>
                <p className='fs-1 fw-semibold text-light'>We Offer Organic For You</p>
                    <button className={`btn  rounded-2 ${style.btn}`} type='button'>Explore Now <img src={arrow} className='img-fluid'></img> </button>
                </div>
            </div>
            <div className="row" >
  {vegetables.map((product) => (
    <div className={`col-12 col-md-4 col-lg-3 mt-5`} >
      <div className={`card border-0 rounded-4 d-flex justify-content-center align-items-center ${style.backGround}`}>
        <div className="card-body">
          <div className={`${style.bgg} col-5 rounded-2 mt-2`}>
            <p className="card-title text-light text-center">{product.TitleCard}</p>
          </div>
          <img src={product.Image} className={`${style.widthhh} img-fluid`} alt="Card Image" />
          <p className={`card-text fs-6 fw-semibold ${style.fontCol}`}>{product.Name}</p>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <p className={`text-decoration-line-through pt-2 ${style.textCol}`}>{product.price1}</p>
              <p className="fs-6 fw-bold pt-2">{product.price2}</p>
            </div>
            <img src={product.Star} className="img-fluid" alt="Star" />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Organic