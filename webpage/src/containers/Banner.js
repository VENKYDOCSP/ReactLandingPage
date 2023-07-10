import React from 'react';
import banner from '../images/HomePage/image (3)-overlay.png';
import styles from './Banner.module.css';
import arrow from '../images/HomePage/Aerrow.svg';
import Card from './Card';
import Farmers from './Farmers';
import Products from './Products';
import Slider from './Slider';
import Organic from './Organic';
import Eco from './Eco';
import Juice from './Juice';
import News from './News';
import Common from './Common';
import Footer from './Footer';

function Banner(){
  return (
    <>
    <div className='position-relative'>
    <img src={banner} className='img-fluid'/>
    

        <div className={`row position-absolute container ${styles.position}`}>
            <div className='col-md-10 col-lg-5'>
                <div className={`d-flex  fs-2 ${styles.fontt}`}>
                <em>100% Natural Food</em> 
                </div>
                <div>
                    <p className={` display-4 fw-bold  ${styles.font2} ${styles.text_Size}`}>
                    Transform your life with healthy habits choices
                    </p>
                </div>
                <div className='d-flex justify-content-start'>
                <button className={`btn fs-lg-6 rounded-2 ${styles.btn}`} type='button'>Explore Now <img src={arrow} className='img-fluid'></img> </button>
                </div>

            </div>

        </div>

        </div>


      <Card></Card>
      <Farmers></Farmers>
      <Products></Products>
      <Slider></Slider>
      <Organic></Organic>
      <Eco></Eco>
      <Juice></Juice>
      <News></News>
      <Common></Common>
      <Footer></Footer>
    </>
  )
}

export default Banner