import React from 'react';
import NavBarIcon from '../images/HomePage/Logo.svg';
import styles from './NavBar.module.css';
import insta from '../images/HomePage/1.svg'
import Book from '../images/HomePage/2.svg'
import Twitter from '../images/HomePage/3.svg'
import Printest from '../images/HomePage/4.svg'
function Footer() {
  return (
    <>

    <div className='container mt-5 pt-5'>
        <div className='row'>
            <div className='col-md-3 d-flex flex-column  align-items-lg-end align-items-center'>
                <p className={styles.myElement}>Contact Us</p>
                <div className='d-flex flex-column  align-items-lg-end align-items-center'>
                    <p>Email</p>
                    <p>needhelp@Organia.com</p>
                </div>
                <div className='d-flex flex-column  align-items-lg-end align-items-center'>
                    <p>Phone</p>
                    <p>9360200358</p>
                </div>
                <div className='d-flex flex-column  align-items-lg-end align-items-center'>
                <p> Address  </p>
                <p>88 road, borklyn street, USA</p>
                </div>
                
                
            </div>
            <div className='col-md-6 text-center '>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                <p className="navbar-brand d-flex justify-content-center  gap-2" href=""><img src={NavBarIcon} className="img-fluid" alt="Organick Logo" />
        <span className={`${styles.myElement} `}>Organick</span></p>
        <p className={`col-9 d-flex justify-content-center align-items-center`}>Simply dummy text of the printing and typesetting industry.
Lorem Ipsum simply dummy text of the printing </p>
                <div>
                    <img src={insta}></img>
                    <img src={Book}></img>
                    <img src={Twitter}></img>
                    <img src={Printest}></img>
                </div>
                </div>
            </div>
            <div className='col-md-3 d-flex justify-content-center align-items-center align-items-lg-start flex-column'>
            <p className={styles.myElement}>Utility Page</p>
                <p>Style Guide</p>
                <p>404 Not Found</p>
                <p>Password Protected</p>
                <p>Licences</p>
                <p>Changelog </p>
            </div>

        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Footer