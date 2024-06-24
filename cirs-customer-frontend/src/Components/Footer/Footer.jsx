import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram (1).png'
import whatsapp_icon from '../Assets/whatsapp (1).png'
import facebook_icon from '../Assets/facebook (1).png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <Link style={{ textDecoration: 'none' }} to={'/'}><h1 className='footer-topics'>FixIT Hub</h1></Link>
            </div>
            <ul className="footer-links">
                <Link to={'/aboutus'} style={{ textDecoration: 'none', color: 'white' }}><li className='footer-topics'>About Us</li></Link>
                <Link to={'/contactus'} style={{ textDecoration: 'none', color: 'white' }}><li className='footer-topics'>Contact Us</li></Link>
                <Link to={'/feedback'} style={{ textDecoration: 'none', color: 'white' }}><li className='footer-topics'>Feedbacks</li></Link>
            </ul>
            <div className="footer-social-icon" >
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" style={{ cursor: 'pointer' }} />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" style={{ cursor: 'pointer' }} />
                </div>
                <div className="footer-icons-container">
                    <img src={facebook_icon} alt="" style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p style={{ color: 'white' }}>Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer