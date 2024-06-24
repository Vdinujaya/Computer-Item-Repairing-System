import React from 'react'
import './CSS/Services.css'
import arrow_icon from '../Components/Assets/next (2).png'
import { Link, useParams } from 'react-router-dom'

const Services = () => {
  return (
    <div className='servie'>
      <div className="servie-left" id='service-01'>
        <div>
          <p style={{ fontSize: '100px', marginBottom: '40px', color: 'gold' }}>Hardware Repairs</p>
          <p>At FixIT Hub, we understand the frustration that comes with hardware malfunctions. Whether it's a faulty component, a malfunctioning device, or a complete system breakdown, our expert technicians are here to help. With years of
            experience and advanced diagnostic tools, we'll quickly identify the issue and provide efficient repairs to get your computer back in working order. Trust FixIT Hub to handle all your hardware repair needs with professionalism and expertise.</p>
          <Link to={'/booking'} style={{ textDecoration: 'none' }}><div className='booking-btn'>
            <p>Go to Booking Now</p>
            <img src={arrow_icon} alt="" />
          </div></Link>
        </div>
      </div>
      <div className="servie-left" id='service-02'>
        <div>
          <p style={{ fontSize: '100px', marginBottom: '40px', color: 'gold' }}>Software Troubleshooting</p>
          <p>Dealing with software issues can be frustrating and time-consuming. At FixIT Hub, we specialize in diagnosing and resolving a wide range of software problems, from virus removal to operating system errors. Our experienced technicians have the knowledge and expertise to tackle even the most complex software issues,
            restoring your computer to optimal performance. Let FixIT Hub take the stress out of software troubleshooting – trust us to get your computer back on track.</p>
          <Link to={'/booking'} style={{ textDecoration: 'none' }}><div className='booking-btn'>
            <p>Go to Booking Now</p>
            <img src={arrow_icon} alt="" />
          </div></Link>
        </div>
      </div>
      <div className="servie-left" id='service-03'>
        <div>
          <p style={{ fontSize: '100px', marginBottom: '40px', color: 'gold' }}>Data Recovery</p>
          <p>Losing important data can be a nightmare, whether it's due to accidental deletion, hardware failure, or software corruption. At FixIT Hub, we understand the importance of your data and offer professional data recovery services to help you retrieve lost files
            and documents. Our skilled technicians utilize state-of-the-art tools and techniques to recover data from a variety of storage devices, ensuring the highest chances of success. Trust FixIT Hub to recover your valuable data and get you back up and running in no time.</p>
          <Link to={'/booking'} style={{ textDecoration: 'none' }}><div className='booking-btn'>
            <p>Go to Booking Now</p>
            <img src={arrow_icon} alt="" />
          </div></Link>
        </div>
      </div>
      <div className="servie-left" id='service-04'>
        <div>
          <p style={{ fontSize: '100px', marginBottom: '40px', color: 'gold' }}>Upgrades and Enhancements</p>
          <p>Looking to boost your computer's performance and capabilities? At FixIT Hub, we offer a comprehensive range of upgrade services to help you get the most out of your device. Whether you're looking to increase
            storage, improve speed, or enhance functionality, our expert technicians can recommend and install the right upgrades for your needs. Trust FixIT Hub to provide efficient and reliable upgrades that will take your computer to the next level.</p>
          <Link to={'/booking'} style={{ textDecoration: 'none' }}><div className='booking-btn'>
            <p>Go to Booking Now</p>
            <img src={arrow_icon} alt="" />
          </div></Link>
        </div>
      </div>
      <div className="servie-left" id='service-05'>
        <div>
          <p style={{ fontSize: '100px', marginBottom: '40px', color: 'gold' }}>Custom Builds</p>
          <p>Ready to create the computer of your dreams? At FixIT Hub, we specialize in custom-built computers tailored to your specific needs and preferences. Whether you're a gaming enthusiast, a professional designer,
            or a business owner, we'll work closely with you to design and build a system that meets your requirements and exceeds your expectations. With high-quality components and expert craftsmanship, trust FixIT Hub to bring your custom-built computer to life.</p>
          <Link to={'/booking'} style={{ textDecoration: 'none' }}><div className='booking-btn'>
            <p>Go to Booking Now</p>
            <img src={arrow_icon} alt="" />
          </div></Link>
        </div>
      </div>
      <div className="servie-left" id='service-06'>
        <div>
          <p style={{ fontSize: '100px', marginBottom: '40px', color: 'gold' }}>Consultation and Advice</p>
          <p>At FixIT Hub, we understand that navigating the world of technology can be daunting. That's why we offer expert consultation
            and advice to help you make informed decisions about your computer needs. Whether you're unsure about which repair service is right for you, considering upgrading your hardware,
            or need guidance on setting up your home network, our friendly and knowledgeable team is here to help.</p>
          <Link to={'/booking'} style={{ textDecoration: 'none' }}><div className='booking-btn'>
            <p>Go to Booking Now</p>
            <img src={arrow_icon} alt="" />
          </div></Link>
        </div>
      </div>
    </div>
  )
}

export default Services