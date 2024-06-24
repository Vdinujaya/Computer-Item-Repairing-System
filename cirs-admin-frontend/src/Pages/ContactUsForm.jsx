import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { notification } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import './css/ContactUsForm.css'

const ContactUsForm = () => {

  let navigate = useNavigate();

  const { id } = useParams();

  const statusOptions = {
    option0: 'Select Status',
    option1: 'Done',
    option2: 'Not Done',
    option3: 'Pending',
  };

  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleChange = (event, setState) => {
    const selectedValue = event.target.value;
    setState(selectedValue);
  };

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    other_details: "",
    status: ""
  })

  const { name, email, subject, message, other_details, status } = contact

  const onInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadContacts()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/cusContact", contact);

      notification.success({
        message: 'Message Sent',
        description: 'Your message has been successfully sent. We will get back to you soon.',
      });

      setContact({
        name: "",
        email: "",
        subject: "",
        message: "",
        other_details: "",
        status: ""
      });
    } catch (error) {
      console.error('Error submitting message:', error);
      notification.error({
        message: 'Message Sending Failed',
        description: 'There was an error while sending your message. Please try again later.',
      });
    }
  }

  const loadContacts = async () => {
    const result = await axios.get(`http://localhost:8080/cusContact/${id}`)
    const loadedContact = result.data;
    setContact(loadedContact);
    setSelectedStatus(loadedContact.status);
  }

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='contactus-form-in'>
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
  )
}

export default ContactUsForm