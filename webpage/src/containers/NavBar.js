import React, { useState } from 'react';
import NavBarIcon from '../images/HomePage/Logo.svg';
import SearchIcon from '../images/HomePage/Search Icon.svg';
import CartIcon from '../images/HomePage/Cart Icon.svg';
import {useNavigate} from "react-router-dom";
import styles from './NavBar.module.css';



function NavBar(){

    const NavBar=[
        "Home","About","Pages","Shop","Project","News"
    ]

    const [topic ,setTopic]=useState(NavBar)

    const navigate = useNavigate();


    const handleNavigation = (path) => {
      navigate(path);
    };

  return (
    <>

<nav class="navbar navbar-expand-lg navbar-light mt-3 mb-3 ">
  <div class="container">
  <p className="navbar-brand d-flex justify-content-between gap-2" href=""><img src={NavBarIcon} className="img-fluid" alt="Organick Logo" />
        <span className={styles.myElement}>Organick</span>
    </p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center ">

      <ul className="navbar-nav ">
  {
        topic.map((navBar)=>(

        <li className={`nav-item ${styles.topic}`} 
                  onClick={() => handleNavigation(`/${navBar.toLowerCase()}`)}>
            <p className="nav-link">{navBar}</p>
        </li>
        ))
    }
    </ul>
    

      </ul>
      <form className={`d-flex me-3 ${styles.bg} border-0 rounded-5`}>
        <input className={`form-control me-2 border-0 rounded-5 text-center ${styles.bg}`} type="search" placeholder="Search" aria-label="Search"/>
        <img src={SearchIcon} className={`img-fluid`}/>
  </form>
     

  {/* <div className='d-flex justify-content-center align-items-center rounded-5 border-2 rounded-4'>
    <img src={CartIcon} className={`img-fluid `}/>
    <div className='mt-3'>
       <p>Cart (0)</p>
    </div>
  </div> */}
    </div>
    
  </div>
</nav>

    </>
   
  )
}

export default NavBar