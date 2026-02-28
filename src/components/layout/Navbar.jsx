import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import women from '../../assets/images/women.png'


export const Navbar = () => {
  return (
   <>
   <style>
    {
      `
      .navbar-collapse{
      flex-basis:inherit!important;
      flex-grow:inherit!important;
      
      }
      .dummy-image{
      width:30px;
      height:30px;
      border-radius:50%;
      background:grey;
      
      }
      .navt{
      background:#386d7e14;}
      `
    }
   </style>
    <nav className="navbar navbar-expand-lg navbar-light navt">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold theme" href="#">ORDER MANAGEMENT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><IoIosNotificationsOutline style={{fontSize:"24px"}} /></a>
        </li>
        <li className="nav-item">
          <div className="d-flex align-items-center">
             <a className="nav-link fw-bold" href="#">Admin</a>
          <img src={women} alt=""className='dummy-image' />

          </div>
         
        </li>
        <li className="nav-item dropdown">
        <div class="btn-group">
  <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Profile</button></li>
    <li><button class="dropdown-item" type="button">Settings</button></li>
    <li><button class="dropdown-item" type="button">Logout</button></li>
  </ul>
</div>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}
