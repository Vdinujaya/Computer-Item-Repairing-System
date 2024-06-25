import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar' style={{padding:'16px'}}>
        <div className='nav-logo'>
            <h1><Link to='/' style={{textDecoration:'none',color:'black',background:'gold'}}>FixIT Hub Admin</Link></h1>
        </div>
        <ul className='nav-menu' style={{background:'gold'}}>
            <li><Link to='/' style={{textDecoration:'none',color:'black',background:'gold',transition:'color 0.5s'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}>Search</Link></li>
            <li><Link to='/booking' style={{textDecoration:'none',color:'black',background:'gold',transition:'color 0.5s'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}>Booking</Link></li>
            <li><Link to='/contactus' style={{textDecoration:'none',color:'black',background:'gold',transition:'color 0.5s'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}>Contact Us</Link></li>
            <li><Link to='/feedback' style={{textDecoration:'none',color:'black',background:'gold',transition:'color 0.5s'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}>Feedback</Link></li>
        </ul>
    </div>
  )
}

export default Navbar