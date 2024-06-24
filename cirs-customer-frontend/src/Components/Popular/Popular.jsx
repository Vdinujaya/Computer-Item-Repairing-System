import React from 'react'
import './Popular.css'
import hardware from '../Assets/workstation (1).png'
import { Link } from 'react-router-dom'

const Popular = () => {
  return (
    <div className='popular'>
      <h1 style={{ color: 'gold' }}>OUR SERVICES</h1>
      <hr />

      <div class="grid-container">
        <Link to={'/services'}><div class="grid-item">
          <img src={hardware} alt="Image 1" />
          <div class="overlay">Hardware Repairs</div>
        </div></Link>
        <Link to={'/services'}><div class="grid-item">
          <img src={hardware} alt="Image 2" />
          <div class="overlay">Software Troubleshooting</div>
        </div></Link>
        <Link to={'/services'}><div class="grid-item">
          <img src={hardware} alt="Image 3" />
          <div class="overlay">Data Recovery</div>
        </div></Link>
        <Link to={'/services'}><div class="grid-item">
          <img src={hardware} alt="Image 4" />
          <div class="overlay">Upgrades and Enhancements</div>
        </div></Link>
        <Link to={'/services'}><div class="grid-item">
          <img src={hardware} alt="Image 5" />
          <div class="overlay">Custom Builds</div>
        </div></Link>
        <Link to={'/services'}><div class="grid-item">
          <img src={hardware} alt="Image 6" />
          <div class="overlay">Consultation and Advice</div>
        </div></Link>
      </div>
    </div>
  )
}

export default Popular