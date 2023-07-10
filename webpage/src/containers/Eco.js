import React from 'react';
import style from './Eco.module.css';
import photo from '../images/HomePage/Photo (4).jpg';
import styles from './Banner.module.css';

function Eco() {
  return (
    <>
      <div className='row position-relative'>
        <div className='col-12 col-lg-6'>
          <img src={photo} className='img-fluid' alt='Eco Friendly' />
        </div>
        <div className={`col-12 col-lg-6 pt-4 pb-4 border-0  rounded-3 d-flex justify-content-center align-items-center ${style.pta} ${style.cardContainer}`}>
          <div className={`col-lg-5 d-flex flex-column ps-3 pe-2 card-body card border-0 d-flex justify-content-lg-start align-items-lg-start  align-items-center ${style.Wdth}`}>
            <p className={`fs-5 fw-semibold ${styles.fontt}`}>
              Eco Friendly
            </p>
            <p className={`fs-4 fw-bold ${styles.font2}`}>
              Econis is a Friendly Organic Store
            </p>
              <p className={`fs-4 ${styles.font2} ${style.text}`}>
                Start with Our Company First
              </p>
              <p className={`fs-6 text-dark col-10 d-flex justify-content-center align-content-center ${styles.font2} ${style.text}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
              <p className={`fs-4 ${styles.font2} ${style.text}`}>
                Learn How to Grow Yourself
              </p>
              <p className={`fs-6 text-dark col-10 ${styles.font2} ${style.text}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
              <p className={`fs-4 ${styles.font2} ${style.text}`}>
                Farming Strategies of Today
              </p>
              <p className={`fs-6 text-dark col-10 ${styles.font2} ${style.text}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Eco;
