import React, { useContext } from 'react'
import './Home.css';
import Homeimage from '../../images/HomeImage.jpg'
import { UserContext } from "../../App";
import { NavLink } from 'react-router-dom';
import  Template  from './Template';
const Home = () => {
  
  const { state, dispatch } = useContext(UserContext);
  return (
    <div className='Home'>
      <div className="containter">
        <h1  className = "tagline">Create a Portfolio<br/> without limits</h1>
        <p className='type'> What Kind of portfolio whould you like to create ?</p>
        <Template />
        <div className="StarterButton">
            <NavLink  to="/about" className="home nav-link " >
            <button type="button" className='getStart'> Get Started </button>
            </NavLink>
        </div>

      </div>
        <div className="footer">
          <div className="FooterTagline">
            <p>One Platform <br/> Infinte possibilities</p>
          </div>
          <div className="lines">
            <div className="col">
                <div className="line"></div>
                <h4>Unlimited creation</h4>
                <p>Create a website with a complete suite of advanced functionalities and bring your vision to life.</p>
            </div>
            <div className="col">
                <div className="line"></div>
                <h4>Powerful infrastructure</h4>
                <p>Get an enterprise-grade foundation, engineered for your limitless scalability and peace of mind.</p>
            </div>
            <div className="col">
                <div className="line"></div>
                <h4>The place for growth</h4>
                <p>Convert and scale seamlessly with built-in marketing and business solutions.</p>
            </div>

          </div>
          
        </div>
    </div>
  )
}

export default Home

//rafce()