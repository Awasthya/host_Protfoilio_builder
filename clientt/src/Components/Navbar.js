import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from './Logo3.png';
import { UserContext } from "../App";
const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
         <li class="nav-item">
      <NavLink  to="/" className="home nav-link " ><b>Home</b></NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="/myinfo" className="myinfo nav-link link">
            <div className="inner">
                MyInfo
              </div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink  to="/about" className="about nav-link link">
            <div className="inner">
                About
              </div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink  to="/contact" className="contact nav-link link">
            <div className="inner">
                Contact
              </div>
            </NavLink>
          </li>
            <li class="nav-item">
            <NavLink  className="login nav-link link" to="/logout">
            <div className="inner">
                Logout
              </div>
            </NavLink>
            </li>
        </>
      )
    } else {
      return (
        <>
         <li class="nav-item">
      <NavLink  to="/" className="home nav-link " ><b>Home</b></NavLink>
            </li>
         
          
          <li class="nav-item">
            <NavLink  to="/contact" className="contact nav-link link">
              <div className="inner">
                Contact
              </div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink  className="login nav-link link" to="/signin">
            <div className="inner">
                Login
              </div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="register nav-link link" to="/signup">
            <div className="inner">
                Register
              </div>
            </NavLink>
            </li>
        </>
      )
    }
  }

  return (
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  <img src= {logo} className="logo" alt="Logo"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="containant navbar-nav leftContent">
     
            <RenderMenu />
      </ul>
   
    </div>
  </div>
</nav>
   
  )
}

export default Navbar

       
            {/* <nav class="navbar " >
          <a class="navbar-brand " href="#">
            <img src= {logo} className="logo" alt="Logo"/>
          </a>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick = {() => setIsMobile(false)}>
            <li class="nav-item">
                <b><NavLink  class="home"  to="/">Home</NavLink></b>
              </li>
              <li class="nav-item">
                <b><NavLink  class="myinfo" to="/MyInfo">MyInfo</NavLink></b>
              </li>
              <li class="nav-item">
                <b><NavLink  class="about" to="/about">About</NavLink></b>
              </li>
              <li class="nav-item">
                <b><NavLink  class="contact" to="/contact">Contact</NavLink></b>
              </li>
              <li class="nav-item">
                <b><NavLink  class="login" to="/signin">Login</NavLink></b>
              </li>
              <li class="nav-item">
                <b><NavLink  class="register" to="/signup">Register</NavLink></b>
            </li>
            <li>
    
          <button className="mobile-menu-icon"
          onClick={() =>setIsMobile(!isMobile)}> {isMobile ? (<i className="fas fa-times"> </i>) : (<i className="fas fa-bars"></i>)}</button>
            </li>
          </ul>
        </nav>   */}