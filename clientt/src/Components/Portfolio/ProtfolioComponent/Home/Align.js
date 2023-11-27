import React from 'react'
import Profile from './profile.js';
import Footer from './Footer/Footer';
import './align.css';
const Align = (props) => {
  
  return (
    <div className="home-container">
      <Profile visitor = {props.visitor} userData = {props.userData}/>
      <Footer/> 
    </div>
  )
}
export default Align
