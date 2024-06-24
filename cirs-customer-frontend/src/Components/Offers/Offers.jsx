import React from 'react'
import './Offers.css'
import exlusive_image from '../Assets/computer-maintenance-checkup copy.jpg'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1 style={{ color: 'gold' }}>Exlusive Offer For You</h1>
        <ul style={{ color: 'white', fontWeight: '600' }}>
          <li>Comprehensive computer diagnostics and tune-up</li>
          <li>Virus and malware removal</li>
          <li>Disk cleanup and optimization</li>
          <li>System updates and software patches</li>
        </ul>
        <h2 style={{ color: 'white' }}>All for just LKR 20000</h2>
        <p>Don't miss out – schedule your Spring Cleaning service today!</p>
        <Link to={'/booking'}><button>Schedule Now</button></Link>
      </div>
      <div className="offers-right"></div>
      <img src={exlusive_image} alt="" style={{ width: '50%', height: '50%' }} />
    </div>
  )
}

export default Offers