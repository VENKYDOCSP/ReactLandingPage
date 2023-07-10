import React from 'react';
import left from '../images/HomePage/Photo_Left.png';
import right from '../images/HomePage/Right_Photo.png';
import style11 from './Slider.module.css';
import roundPhoto from '../images/HomePage/Photo (9).jpg';
import Star from '../images/HomePage/Star.svg';
import stylee1 from './Card.module.css';

function Slider(){
    const detail = [
        {
            count:"100%",
            Text:"Organic"
        },
        {
            count:"285",
            Text:"Active Product"
        },
        {
            count:"350+",
            Text:"Organic Orchads"
        },
        {
            count:"25+",
            Text:"Years of Farming"
        }
]
  return (
    <>
      <div className="mt-4 mb-5  ">
        <div className="row d-flex justify-content-center align-items-center">
          {/* <div className="col-lg-3">
            <img src={right} className="img-fluid"></img>
          </div> */}

          <div className="col-12 col-lg-6 text-center mt-lg-5 d-flex justify-content-center align-items-center">
            <div className=" mt-5">
              <p className={`fs-3 ${stylee1.font2}`}>
                <em>Testimonial</em>{" "}
              </p>
              <p className={`fs-3 ${stylee1.font3}`}>
                What Our Customer Saying?
              </p>
              <img src={roundPhoto}
                className={` img-fluid ${style11.Radius}`}
              alt='P' ></img>
              <p></p>
              <img src={Star} className={`img-fluid`} alt='Star.img'></img>
              <p className='col-12 ps-5 pe-5'>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <h4 className={`fs-4 ${stylee1.font3}`}>Sara Taylor</h4>
              <p>Consumer</p>
              <hr className={` mt-4 ${style11.line}`} />

              <div className=' row d-flex justify-content-center align-items-center '>
              {detail.map((detail) => (
                <div className=' col-6 col-md-3  justify-content-center d-flex'>
                    <div className={` text-center mt-5 ${style11.Circle}`}>
                  <p className={`fs-3 d-flex justify-content-center flex-column pt-4 ${stylee1.font3}`}>
                    {detail.count}{" "}
                    <span className={`fs-6 ${stylee1.font3}`}>
                      {detail.Text}
                    </span>
                  </p>
                </div>
                 </div>
                
              ))}
            </div>
            </div>

          </div>

          {/* <div className="col-3">
            <img src={right} className={`img-fluid ${style11.h}`}></img>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Slider