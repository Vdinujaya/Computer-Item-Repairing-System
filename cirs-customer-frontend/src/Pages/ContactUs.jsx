import React from 'react'
import './CSS/ContactUs.css'
import axios from 'axios'
import { useState } from 'react'
import { notification } from 'antd'
import phone_icon from '../Components/Assets/phone-call.png'
import mail_icon from '../Components/Assets/mail.png'
import address_icon from '../Components/Assets/pin.png'


const ContactUs = () => {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const { name, email, subject, message } = contact

    const onInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send the form data
            await axios.post("http://localhost:8080/cusContact", contact);

            // Show success notification
            notification.success({
                message: 'Message Sent',
                description: 'Your message has been successfully sent. We will get back to you soon.',
            });

            // Reset the form fields
            setContact({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            // Handle error
            console.error('Error submitting message:', error);
            // Show error notification if necessary
            notification.error({
                message: 'Message Sending Failed',
                description: 'There was an error while sending your message. Please try again later.',
            });
        }
    }

    return (
        <div className='contactus'>
            <div className="contactus-title">
                <h1 style={{ color: 'gold' }}>Contact Us</h1>
            </div>
            <div className="contactus-form">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='contactus-form-in'>
                        <div className='contactus-map'>
                            <iframe class="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d832.7542276280559!2d80.07003845912413!3d6.8583269932628035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTEnMzAuOSJOIDgwwrAwNCcxMi40IkU!5e0!3m2!1sen!2slk!4v1713381239712!5m2!1sen!2slk"
                                frameborder="0" style={{ minHeight: "320px", border: "0" }} allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
                        </div>
                        <div className='contactus-name-email-subject-message'>
                            <div className='contactus-name-email' style={{ width: '100%' }}>
                                <div className="contactus-name">
                                    <input type="text" placeholder='Your Name' name='name' value={name} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className="contactus-email">
                                    <input type="email" placeholder='Your Email' name='email' value={email} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div className='contactus-subject' style={{ width: '100%' }}>
                                <input type="text" placeholder='Subject' name='subject' value={subject} onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='contactus-message' style={{ width: '100%' }}>
                                <textarea placeholder='Message' name='message' value={message} onChange={(e) => onInputChange(e)}></textarea>
                            </div>
                            <div className='contactus-button' style={{ width: '100%' }}>
                                <button>Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="contactus-end">
                <div className="con-address">
                    <img src={address_icon} alt="" style={{ background: 'gold' }} />
                    <p style={{ textAlign: 'center', color: 'black' }}>287/81, Silver Garden, Watareka, Padukka</p>
                </div>
                <div className="con-email">
                    <img src={mail_icon} alt="" style={{ background: 'gold' }} />
                    <p style={{ textAlign: 'center', color: 'black' }}>fixithub@gmail.com</p>
                </div>
                <div className="con-phone">
                    <img src={phone_icon} alt="" style={{ background: 'gold' }} />
                    <p style={{ textAlign: 'center', color: 'black' }}>0770884156</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs