import React, {useState} from 'react'
import portfolio from '../Portfolio/portfolio'
import portfolioTemplate1 from './../../images/PortfolioTemplate1.jpg';
import portfolioTemplate2 from './../../images/PortfolioTemplate2.jpg';
import portfolioTemplate3 from './../../images/PortfolioTemplate3.jpg';
import portfolioTemplate4 from './../../images/PortfolioTemplate4.jpg';
import portfolioTemplate5 from './../../images/PortfolioTemplate5.jpg';
import portfolioTemplate6 from './../../images/PortfolioTemplate6.jpeg';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './Template.css'
const Template = () => {

    const [current,setCurrent] = new useState(1);
    const sliderImage = [
        {
            sliderName : portfolioTemplate1,
            silderAlt : "portfolio Template 1"
        },
        {
            sliderName : portfolioTemplate2,
            silderAlt : "portfolio Template 1"
        },
        {
            sliderName : portfolioTemplate3,
            silderAlt : "portfolio Template 1"
        },
        {
            sliderName : portfolioTemplate4,
            silderAlt : "portfolio Template 1"
        },
        {
            sliderName : portfolioTemplate5,
            silderAlt : "portfolio Template 1"
        },
        {
            sliderName : portfolioTemplate6,
            silderAlt : "portfolio Template 1"
        }

    ]
    const nextSlider = () => {
        console.log('left');
        setCurrent(current === 5 ? 5 : current + 1);
    }
    const prevSlider = () => {
        console.log('right');

        setCurrent(current === 1 ? 1 : current - 1);
    }
  return (
    <div className="template">
        <ArrowCircleLeftIcon className='left'  onClick={prevSlider}/>
        <ArrowCircleRightIcon className='right' onClick = {nextSlider}/>
        <div className="slider">

        {sliderImage.map((image,idx) => {
            return (
            <div
                className={(idx >= current-1 && idx <= current+1 )? 'slide activee' : 'slide'}
                key={idx}
            >
                <div className="templateImage">
                    <img src = {image.sliderName}  alt = "portfolio Template 1 " />
                </div>
            </div>
            );
        })}
    </div>
        </div>
  )
}

export default Template
