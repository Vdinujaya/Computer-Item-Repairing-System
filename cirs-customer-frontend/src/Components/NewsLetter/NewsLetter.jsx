import React from 'react'
import './NewsLetter.css'
import arrow_icon from '../Assets/right-arrow (3).png'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1 style={{ color: 'gold' }}>Thank you for choosing us! We hope you're satisfied with our service</h1>
      <p>Click below to provide feedback. We're constantly looking for ways to improve</p>
      <Link to={'/feedback'} style={{ textDecoration: 'none' }}>
        <div className='feedbackbtn'>
          <p>Feedback</p>
          <img src={arrow_icon} alt="" />
        </div>
      </Link>
    </div>
  )
}

export default NewsLetter