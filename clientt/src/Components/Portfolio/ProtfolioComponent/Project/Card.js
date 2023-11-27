import React from 'react'
import './cards.css';
const Card = (props) => {
    return (
        <div>
            <div className="box btn_shadow">
                <a href = {props.link} >

                    <img src={props.Image} alt='no reachable' />
                </a>
                
                <div className='category'>
                    <span>{props.projectName}</span>
                    <label>
                        <i className='far fa-heart'>{props.description}</i>
                    </label>
                </div>
                <div className="title">
                    <h2>{props.title}</h2>
                    <a href="#proup" className="arrow">
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Card