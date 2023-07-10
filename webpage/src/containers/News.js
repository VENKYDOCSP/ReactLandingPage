import React from 'react';
import styles from './Banner.module.css';
import style12 from './News.module.css';
import arrow from '../images/HomePage/Aerrow.svg';
import vec from '../images/HomePage/Vector.svg'
import green from '../images/HomePage/Photo (19).png';
import red from '../images/HomePage/Photo (20).png';


function News(){
  return (
    <>
    <div className='container mt-5'>
        <div className='container col-10'>
            <h2 className={`fs-4 ${styles.fontt}`}><em>News</em> </h2>
        </div>
        <div className='d-flex justify-content-around align-items-center'>
            <div className='col-6'>
            <p className={`fs-1 ${styles.font2}`}>Discover weekly content about organic food, & more</p>

            </div>
            <div >
            <button className={`btn  rounded-1  ${style12.butn}`} type='button'>More News <img src={arrow} className='img-fluid'></img> </button>
            </div>
        </div>

        <div className='row d-flex justify-content-center align-items-center'>

            <div className='col-12 col-md-5  position-relative  mt-5 mb-lg-0 mb-md-0 mb-5'>
                <img src={green} className='img-fluid rounded-4 mt-lg-0 mt-md-0 mt-5'></img>
                <div className='card border-0 rounded-4 position-absolute top-50 ms-4 me-5 ps-4 pt-4 pb-4 pe-4'>
                    <img scr={vec}></img>
                    <p className={`fw-bold`}>By Rachi Card</p>
                    <p className={` fs-6 fw-bold ${styles.font2}`}>The Benefits of Vitamin D & How to Get It</p>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    <div className='d-flex justify-content-start'>
                <button className={`btn  rounded-2 ${styles.btn}`} type='button'>Explore Now <img src={arrow} className='img-fluid'></img> </button>
                </div>
                </div>
            </div>

            <div className='col-12 col-md-5  position-relative  mt-5'>
                <img src={red} className='img-fluid rounded-4 mt-lg-0 mt-md-0 mt-5'></img>
                <div className='card border-0 rounded-4 position-absolute top-50 ms-4 me-5 ps-4 pt-4 pb-4 pe-4'>
                    <img scr={vec}></img>
                    <p className={`fw-bold`}>By Rachi Card</p>
                    <p className={` fs-6 fw-bold ${styles.font2}`}>The Benefits of Vitamin D & How to Get It</p>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    <div className='d-flex justify-content-start'>
                <button className={`btn  rounded-2 ${styles.btn}`} type='button'>Explore Now <img src={arrow} className='img-fluid'></img> </button>
                </div>
                </div>
            </div>
        </div>

    </div>
    
    
    </>
  )
}

export default News