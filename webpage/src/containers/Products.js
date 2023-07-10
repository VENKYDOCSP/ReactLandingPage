import React, { useState } from "react";
import bg from '../images/HomePage/Photo (9).png';
import bg1 from '../images/HomePage/Photo (10).png';
import bg2 from '../images/HomePage/Photo (11).png';
import bg3 from '../images/HomePage/image 13.png';
import bg4 from '../images/HomePage/Photo (13).png';
import bg5 from '../images/HomePage/Photo (14).png';
import bg6 from '../images/HomePage/image 14.png';
import bg7 from '../images/HomePage/Photo (12).png';
import style from './Products.module.css';
import arrow from '../images/HomePage/Aerrow.svg';
import stylee1 from './Card.module.css';
import stylee from './Farmers.module.css';
import Star from '../images/HomePage/Star.svg';
import {useNavigate} from "react-router-dom";

function Products() {

    // const TitleCard =["Vegetable","Fresh","Millets","Vegetable","Health","Nuts","Fresh","Fresh"];
    // const Image=[bg,bg1,bg2,bg3,bg4,bg5,bg6,bg7];
    // const Name = ["Calabrese Broccoli","Fresh Banana Fruites","White Nuts","Vegan Red Tomato","Mung Bean","Brown Hazelnut","Eggs","Zelco Suji Elaichi Rusk"];
    // const price1 =["$20.00","$20.00","$20.00","$20.00","$20.00","$20.00","$20.00","$20.00"]
    // const price2 = ["$13.00","$14.00","$15.00","$17.00","$11.00","$12.00","$17.00","$15.00"]
    // const Star =[Star,Star,Star,Star,Star,Star,Star,Star]

    const productData = [
        {
          TitleCard: "Vegetable",
          Image: bg,
          Name: "Calabrese Broccoli",
          price1: "$20.00",
          price2: "$13.00",
          Star: Star
        },
        {
          TitleCard: "Fresh",
          Image: bg1,
          Name: "Fresh Banana Fruites",
          price1: "$20.00",
          price2: "$14.00",
          Star: Star
        },
        {
          TitleCard: "Millets",
          Image: bg2,
          Name: "White Nuts",
          price1: "$20.00",
          price2: "$15.00",
          Star: Star
        },
        {
          TitleCard: "Vegetable",
          Image: bg3,
          Name: "Vegan Red Tomato",
          price1: "$20.00",
          price2: "$17.00",
          Star: Star
        },
        {
          TitleCard: "Health",
          Image: bg4,
          Name: "Mung Bean",
          price1: "$20.00",
          price2: "$11.00",
          Star: Star
        },
        {
          TitleCard: "Nuts",
          Image: bg5,
          Name: "Brown Hazelnut",
          price1: "$20.00",
          price2: "$12.00",
          Star: Star
        },
        {
          TitleCard: "Fresh",
          Image: bg6,
          Name: "Eggs",
          price1: "$20.00",
          price2: "$17.00",
          Star: Star
        },
        {
          TitleCard: "Fresh",
          Image: bg7,
          Name: "Zelco Suji Elaichi Rusk",
          price1: "$20.00",
          price2: "$15.00",
          Star: Star
        }
      ];

      const [product,setProduct] = useState(productData)

      const navigate = useNavigate();

  return (
    <>
      <div className="container mt-5">
        <div className="text-center">
            <p className={`fs-3 ${stylee1.font2}`}><em>Categories </em> </p>
            <p className={` fs-2 ${stylee1.font3}`}>Our Products</p>
        </div>
      <div className="row">
  {product.map((productData) => (
    <div className={`col-12 col-md-4 col-lg-3 mt-5  `} key={productData.TitleCard}>
      <div className={`card border-0 rounded-4 d-flex justify-content-center align-items-center ${style.backGround} `}>
        <div className={`card-body`}>
          <div className={`${style.bgg} col-4 rounded-2 mt-2`}>
            <p className="card-title text-light text-center">{productData.TitleCard}</p>
          </div>
          <img src={productData.Image} className={`${style.widthhh} img-fluid`} alt="Card Image" />
          <p className={`card-text fs-6 fw-semibold ${style.fontCol}`}>{productData.Name}</p>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <p className={`text-decoration-line-through pt-2 ${style.textCol}`}>{productData.price1}</p>
              <p className="fs-6 fw-bold pt-2">{productData.price2}</p>
            </div>
            <img src={productData.Star} className="img-fluid" alt="Star" />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
<div className='d-flex justify-content-center mt-2'>
                <button className={`btn  rounded-2 text-light ${stylee.btn}`} type='button' onClick={()=>{navigate('shop')}}>Load More<img src={arrow} className='img-fluid'></img> </button>
        </div>
        </div>
    </>
  );
}

export default Products;
