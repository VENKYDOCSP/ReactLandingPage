import React from 'react'
import image from '../images/News/Image (10)-overlay.png';
import Style from './NewNews.module.css';
import styles from './Banner.module.css';
import arrow from '../images/HomePage/Aerrow.svg';
import vec from '../images/News/Vector.svg';

import frameImg from '../images/News/Photo (13).png';
import frameImg1 from '../images/News/Photo (14).png';
import frameImg2 from '../images/News/Photo (15).png';
import frameImg3 from '../images/News/Photo (16).png';
import frameImg4 from '../images/News/Photo (17).png';
import frameImg5 from '../images/News/Photo (18).png';
import Common from './Common';
import Footer from './Footer';

function NewNews() {

    const details =[
        {
            backGround:frameImg,
            text:"The Benefits of Vitamin D & How to Get It"
        },
        {
            backGround:frameImg1,
            text:"Our Favorite Summertime Tomato"
        },
        {
            backGround:frameImg2,
            text:"Benefits of Vitamin C & How to Get It"
        },
        {
            backGround:frameImg3,
            text:"Research More Organic Foods"
        },
        {
            backGround:frameImg4,
            text:"Everyday Fresh Fruites"
        },
        {
            backGround:frameImg5,
            text:"Don’t Use Plastic Product! it’s Kill Nature"
        },
    ] 
  return (
    <>
      <div className="position-relative">
        <div>
          <img src={image} className="img-fluid " />
          <p
            className={`position-absolute fs-1 fw-bold ${Style.position} ${styles.font2}`}
          >
            Recent News
          </p>
        </div>
      </div>

      <div className='container'>
        <div className="row d-flex justify-content-center align-items-center mt-2">
            {details.map((Detaills)=>(
                <div className="col-12 col-md-4 pt-5  position-relative  mt-5 mb-lg-0 mb-md-0 mb-5">
                <img
                src={Detaills.backGround}
                className="img-fluid rounded-4 mt-lg-0 mt-md-0 mt-5"
                ></img>
                <div className="card border-0 rounded-4 position-absolute top-50 ms-4 me-5 ps-4 pt-4 pb-4 pe-4">
                {/* <img scr={vec} className='img-fluid' alt='txt'></img> */}
                <p className={`fw-bold`}>By Rachi Card</p>
                <p className={` fs-6 fw-bold ${styles.font2}`}>
                    {Detaills.text}
                </p>
                <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                </p>
                <div className="d-flex justify-content-start">
                    <button
                    className={`btn rounded-2 `}
                    type="button">
                    Read More <img src={arrow} className="img-fluid"></img>{" "}
                    </button>
                </div>
                </div>
                </div>

            )) }
          
        </div>
      </div>

      <Common></Common>
      <Footer></Footer>
    </>
  );
}

export default NewNews