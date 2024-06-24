import React from 'react'
import './CSS/AboutUs.css'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className="aboutus">
            <div className="p1">
                <h1 style={{ color: 'gold' }}>Welcome to FixIT Hub</h1>
                <p>At FixIT Hub, we're more than just a repair shop—we're your reliable tech partner. With a
                    passion for problem-solving and a commitment to customer satisfaction, we've been serving our community with top-notch computer and gadget repairs since 2020.</p>
            </div>
            <div className="p1">
                <h1 style={{ color: 'gold' }}>Our Mission</h1>
                <p>Our mission is simple: to breathe new life into your devices and keep you connected to what matters most.
                    Whether it's a cracked screen, a sluggish system, or a mysterious malfunction, our team of experienced technicians is here to diagnose, repair, and rejuvenate your technology quickly and affordably.</p>
            </div>
            <div className="p1">
                <h1 style={{ color: 'gold' }}>Why Choose FixIT Hub?</h1>
                <p style={{ fontWeight: '300' }}><p style={{ fontSize: '30px' }}><li>Expertise</li></p>Our technicians are highly skilled and certified in a wide range of repairs, ensuring your devices are in capable hands.</p>
                <p style={{ fontWeight: '300' }}><p style={{ fontSize: '30px' }}><li>Quality Service</li></p> We believe in doing the job right the first time. With meticulous attention to detail and thorough testing, we ensure that your device leaves our shop in optimal condition.</p>
                <p style={{ fontWeight: '300' }}><p style={{ fontSize: '30px' }}><li>Fast Turnaround</li></p> We understand the importance of your devices in your daily life. That's why we strive to provide prompt service without compromising on quality.</p>
                <p style={{ fontWeight: '300' }}><p style={{ fontSize: '30px' }}><li>Affordability</li></p> We offer competitive pricing and transparent quotes, so you know exactly what to expect without any surprises.</p>
                <p style={{ fontWeight: '300' }}><p style={{ fontSize: '30px' }}><li>Customer Satisfaction</li></p> Your satisfaction is our priority. From the moment you walk through our doors to the completion of your repair, we're dedicated to providing friendly, professional service that exceeds your expectations.</p>
            </div>
            <div className="p1">
                <h1 style={{ color: 'gold' }}>Our Services</h1>
                <p>At FixIT Hub, we specialize in a wide range of repair services, including</p>
                <p><li>Laptop Repair</li></p>
                <p><li>Desktop Repair</li></p>
                <p><li>Smartphone Repair</li></p>
                <p><li>Tablet Repair</li></p>
                <p style={{ fontSize: '40px' }}>And much more!</p>
                <Link to={'/services'} style={{ textDecoration: 'none', color: 'black', width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '25px' }}><button style={{ fontWeight: '600', cursor: 'pointer' }}>Services</button></Link>
            </div>
        </div>
    )
}

export default AboutUs