import React from 'react';
import styles from './Banner.module.css';
import cardImg from '../images/About/Photo (3).jpg';
import cardImg1 from '../images/About/Photo (4).jpg';
import cardImg2 from '../images/About/Photo (10).png';
import fb from '../images/About/Fb.svg';
import insta from '../images/About/Insta.svg';
import Twitter from '../images/About/Twiter.svg';
import Styleee from './Expert.module.css';

import Img1 from '../images/About/Photo (5).jpg'
import Img2 from '../images/About/Photo (6).jpg'
import Img3 from '../images/About/Photo (7).jpg'
import Img4 from '../images/About/Image (7).png'
import Common from './Common';
import Footer from './Footer';

function Expert(){
  return (
    <>
      <div className="container mt-5 pb-5">
        <div className="text-center">
          <h3 className={`fs-4 ${styles.fontt}`}>
            <em>Team</em>
          </h3>
        </div>
        <div
          className={`text-center d-flex justify-content-center align-items-center flex-column`}
        >
          <p className={`fs-4  ${styles.font2}`}>Our Organic Experts</p>
          <p className="col-8  ">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-4">
            <div className="card border-0" >
              <img src={cardImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className={`card-title fs-5 ${styles.font2}`}>Giovani Bacardo</h5>
                <div className='d-flex justify-content-between'> 
                    <div>
                        <p className={`card-text  ${styles.fontt}`}><em>Farmer</em> </p>
                    </div>
                    <div className='d-flex justify-content-between gap-3'>
                        <img src={fb}></img>
                        <img src={insta}></img>
                        <img src={Twitter}></img>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card border-0" >
              <img src={cardImg1} className="card-img-top" alt="..." />
              <div className="card-body shadow">
                <h5 className={`card-title fs-5 ${styles.font2}`}>Marianne Loreno</h5>
                <div className='d-flex justify-content-between'> 
                    <div>
                        <p className={`card-text  ${styles.fontt}`}><em>Designer</em> </p>
                    </div>
                    <div className='d-flex justify-content-between gap-3'>
                        <img src={fb}></img>
                        <img src={insta}></img>
                        <img src={Twitter}></img>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card border-0" >
              <img src={cardImg2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className={`card-title fs-5 ${styles.font2}`}>Riga Pelore</h5>
                <div className='d-flex justify-content-between'> 
                    <div>
                        <p className={`card-text  ${styles.fontt}`}><em>Farmer</em> </p>
                    </div>
                    <div className='d-flex justify-content-between gap-3'>
                        <img src={fb}></img>
                        <img src={insta}></img>
                        <img src={Twitter}></img>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={`container-fluid ${Styleee.bg2} pt-5 mt-5 pb-5`}>

        <div className='text-center'>
            <p className={` fs-6 ${styles.fontt}`}><em>About Us</em></p>
        </div>
        <div className='text-center'>
            <p className='fs-3 text-light fw-bold'>What We Offer for You</p>
        </div>
        <div className='row d-flex justify-content-center mt-5'>
            <div className='col-lg-2  col-md-6 col-12'>
                <div>
                    <img src={Img1} className='img-fluid rounded-4'></img>
                    <p className='fw-bold pt-2 text-light text-center'>Spicy</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
                <div>
                    <img src={Img2} className='img-fluid rounded-4'></img>
                    <p className='fw-bold pt-2 text-light text-center'>Nuts & Feesd</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
                <div>
                    <img src={Img3} className='img-fluid rounded-4'></img>
                    <p className='fw-bold pt-2 text-light text-center'>Fruits</p>
                </div>
            </div>
            <div className='col-lg-2  col-md-6 col-12'>
                <div>
                    <img src={Img4} className='img-fluid rounded-4'></img>
                    <p className='fw-bold pt-2 text-light text-center'>Vegetable</p>
                </div>
            </div>
        </div>
      </div>

      <Common></Common>
      <Footer></Footer>
    </>
  );
}

export default Expert