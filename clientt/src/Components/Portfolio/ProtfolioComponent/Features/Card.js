import React from 'react'
import './Features.css';
const Card = (props) => {
  return (

        <div className="demo btn_shadow">
            <div className="SkillLogo">
              <img src={props.logo} alt='' />
            </div>
            <br/>
            <div className="skillname">
              <h2>{props.skill}</h2>
            </div>

            </div>
  )
}

export default Card