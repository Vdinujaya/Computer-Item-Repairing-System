import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hello.png'
import arrow_icon from '../Assets/right-arrow (2).png'
import hero_image from '../Assets/depositphotos_119329872-stock-photo-portrait-of-a-beautiful-girl.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div>
          <p style={{ fontSize: '100px', marginBottom: '40px', color: 'gold' }}>Welcome to FixIT Hub</p>
          <p>Your ultimate destination for computer repairs and items. We're dedicated to solving your tech woes swiftly and providing top-quality components to optimize your computing experience. Let's get your devices back on track!</p>
        </div>
      </div>
    </div>
  )
}

export default Hero