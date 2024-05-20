import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
            <h2>New ARRIVALS ONLY</h2>
            <div>
                <div className='haro-hand-icon'>
                    <p>NEW</p>
                    <img src={hand_icon} alt="hand icon" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>latest Collection</div>
                <img src={arrow_icon} alt="arrow icon" />
            </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="Girl" />
      </div>
    </div>
  )
}

export default Hero
