import React from 'react';
import NavBar from './NavBar';
import imgg from '../images/Shop/Image (8)-overlay.png';
import styles from './Banner.module.css';
import Style from './Shop.module.css';
import bg from '../images/HomePage/Photo (9).png';
import bg1 from '../images/HomePage/Photo (10).png';
import bg2 from '../images/HomePage/Photo (11).png';
import bg3 from '../images/HomePage/image 13.png';
import bg4 from '../images/HomePage/Photo (13).png';
import bg5 from '../images/HomePage/Photo (14).png';
import bg6 from '../images/HomePage/image 14.png';
import bg7 from '../images/HomePage/Photo (12).png';
import bg8 from '../images/Shop/Image (9).png';
import bg9 from '../images/Shop/Image (10).png';
import bg10 from '../images/Shop/Photo (14).png';
import bg11 from '../images/Shop/Photo (15).png';
import Star from '../images/HomePage/Star.svg';
import style from './Products.module.css';
import Common from './Common';
import Footer from './Footer';




function Shop(){

  const ProductData = [
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
    } ,
    {
      TitleCard: "Health",
      Image: bg8,
      Name: "Mung Bean",
      price1: "$20.00",
      price2: "$17.00",
      Star: Star
    },
    {
      TitleCard: "Nuts",
      Image: bg9,
      Name: "White Hazelnut",
      price1: "$20.00",
      price2: "$15.00",
      Star: Star
    },
    {
      TitleCard: "Fresh",
      Image: bg10,
      Name: "Fresh Corn",
      price1: "$20.00",
      price2: "$17.00",
      Star: Star
    },
    {
      TitleCard: "Fresh",
      Image: bg11,
      Name: "Organic Almonds",
      price1: "$20.00",
      price2: "$15.00",
      Star: Star
    }
  ];
  return (
    <>
    {/* <NavBar></NavBar> */}
    <div className='position-relative'>
            <div >
                <img src={imgg} className='img-fluid '/> 
                <p className={`position-absolute fs-1 fw-bold ${Style.position} ${styles.font2}`}>Shop</p>
            </div>
        </div>
        <div className="row">
  {ProductData.map((Data) => (
    <div className={`col-12 col-md-4 col-lg-3 mt-5 pt-5 `}>
      <div className={`card border-0 rounded-4 d-flex justify-content-center align-items-center ${style.backGround} `}>
        <div className={`card-body`}>
          <div className={`${style.bgg} col-lg-4 col-md-5 col-6 rounded-2 mt-2`}>
            <p className="card-title text-light text-center">{Data.TitleCard}</p>
          </div>
          <img src={Data.Image} className={`${style.widthhh} img-fluid`} alt="Card Image" />
          <p className={`card-text fs-6 fw-semibold ${style.fontCol}`}>{Data.Name}</p>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <p className={`text-decoration-line-through pt-2 ${style.textCol}`}>{Data.price1}</p>
              <p className="fs-6 fw-bold pt-2">{Data.price2}</p>
            </div>
            <img src={Data.Star} className="img-fluid" alt="Star" />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    <Common></Common>
    <Footer></Footer>
    </>
  )
}

export default Shop