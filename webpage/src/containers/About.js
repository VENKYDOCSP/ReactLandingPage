import React from 'react'
import NavBar from './NavBar';
import bannerPhoto from '../images/About/Image (5)-overlay.png';
import Style from './About.module.css';
import fruit from '../images/About/Image (6).png';
import tractor from '../images/About/Tractor.png';
import chemical from '../images/About/Chemical Plant.png';
import styles from './Banner.module.css';
import arrow from '../images/HomePage/Aerrow.svg';
import Dot from '../images/About/dot.svg';
import leaves from '../images/About/Photo (2).png'
import icon from '../images/About/Icon.png';
import icon1 from '../images/About/Icon (1).png';
import icon2 from '../images/About/Icon (2).png';
import icon3 from '../images/About/Icon (3).png';
import Expert from './Expert';


const About = () => {
  return (

    <>
        {/* <NavBar></NavBar> */}
        <div className='position-relative'>
            <div >
                <img src={bannerPhoto} className='img-fluid '/> 
                <p className={`position-absolute fs-1 fw-bold ${Style.positionn} ${styles.font2}`}>About Us</p>
            </div>
        </div>
        <div className='container mt-5 pt-5'>
            <div className='row  '>
                <div className=' col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                    <img className='img-fluid' src={fruit}></img>

                </div>
                <div className='col-12 col-lg-6 d-flex flex-column align-items-lg-start align-items-center'>
                    <p className={`${styles.fontt} fs-5`}><em>About Us</em> </p>
                    <p className={` ${styles.font2} fs-3 col-lg-6 col-12 d-flex justify-content-center align-items-lg-start align-items-center  `}>We do Creative Things for Success</p>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div className='d-flex'>
                        <div className='d-flex gap-3'>
                            <img src={tractor}></img>
                            <p className={` ${styles.font2} fs-6 `}>Modern Agriculture Equipment</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <img src={chemical}></img>
                            <p  className={` ${styles.font2} fs-6 `}>No growth hormones are used</p>
                        </div>
                    </div>
                    <button className={`btn  rounded-2 mt-4 text-light ${Style.btn}`} type='button'>Explore Now <img src={arrow} className='img-fluid'></img> </button>

                </div>
            </div>

        </div>

        <div className={`${Style.bggg} mt-5`}>
            <div className='container '>
                <div className='row pt-5'>
                    <div className='col-12 col-lg-6 d-flex  flex-column pt-5 '>
                        <p className={` ${styles.fontt} fs-6 d-flex justify-content-lg-start justify-content-center    `}><em> Why Choose us?</em></p>
                        <p className={`${styles.font2} fs-2 col-lg-7 d-flex justify-content-center align-item-center`}>We do not buy from the open market & traders.</p>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                        <div className={` d-flex justify-content-center align-items-center col-md-5 rounded-5 ${Style.bg11}`}>
                            <img src={Dot}></img>
                            <p className='pt-3'>100% Natural Product</p>
                        </div>
                        <p className="col-8 ms-5">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                        <div className={` d-flex justify-content-center align-items-center col-md-5 rounded-5 ${Style.bg11}`}>
                            <img src={Dot}></img>
                            <p className='pt-3'>100%  Increases resistance</p>
                        </div>
                        <p className="col-8 ms-5">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                    </div>
                    <div className="col-12 col-lg-5 d-flex justify-content-center align-item-center">
                        <img src={leaves} className='img-fluid rounded-5'></img>
                    </div>
                </div>
            </div>

            <div className='container mt-5 pb-5'>
                <div className='row d-flex justify-content-center align-item-center'>
                    <div className='col-lg-2 col-md-4 col-6'>
                        <div className="d-flex justify-content-center align-item-center">
                        <img src={icon} className='img-fluid'></img>
                        </div>
                        <p className={`text-center ${styles.font2}`}>Return Policy</p>
                        <p className={`text-center`}>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className='col-lg-2 col-md-4 col-6'>
                        <div className="d-flex justify-content-center align-item-center">
                        <img src={icon1} className='img-fluid'></img>
                        </div>
                        <p className={`text-center ${styles.font2}`}>100% Fresh</p>
                        <p className={`text-center`}>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className='col-lg-2 col-md-4 col-6'>
                        <div className="d-flex justify-content-center align-item-center">
                        <img src={icon2} className='img-fluid'></img>
                        </div>
                        <p className={`text-center ${styles.font2}`}>Support 24/7</p>
                        <p className={`text-center`}>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className='col-lg-2 col-md-4 col-6'>
                        <div className="d-flex justify-content-center align-item-center">
                        <img src={icon3} className='img-fluid'></img>
                        </div>
                        <p className={`text-center ${styles.font2}`}>Secured Payment</p>
                        <p className={`text-center`}>Simply dummy text of the printintypesetting industry.</p>
                    </div>

                </div>

            </div>
        </div>

        <Expert></Expert>

    </>
  )
}

export default About