import React from 'react'
import { Button, Checkbox, Form, Input, Cascader, DatePicker } from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/reset.css'
import './CSS/Booking.css'
import { useState } from 'react'
import axios from 'axios'
import { notification } from 'antd'

const Booking = () => {

  const deviceOptions = {
    option0: 'Select Device',
    option1: 'PC',
    option2: 'LapTop',
    option3: 'Tablet',
    option4: 'SmartPhone',
    option5: 'Other',
  };

  const [selectedDevice, setSelectedDevice] = useState('');

  const serviceOptions = {
    option0: 'Select Service',
    option1: 'Hardware Repairs',
    option2: 'Software Troubleshooting',
    option3: 'Data Recovery',
    option4: 'Upgrades and Enhancements',
    option5: 'Custom Builds',
    option6: 'Consultation and Advice',
    option7: 'Special Offer',
    option8: 'Other',
  };

  const [selectedService, setSelectedService] = useState('');

  const handleChange = (event, setState) => {
    const selectedValue = event.target.value;
    setState(selectedValue);
  };

  const [booking, setBooking] = useState({
    email: "",
    name: "",
    mobile: "",
    device: "",
    service: "",
    booking_date: "",
    issue: ""
  })

  const { email, name, mobile, booking_date, issue } = booking

  const onInputChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data
      await axios.post("http://localhost:8080/cusBooking", { selectedDevice, selectedService, ...booking, device: deviceOptions[selectedDevice], service: serviceOptions[selectedService] });

      // Show success notification
      notification.success({
        message: 'Booking Successful',
        description: 'Your booking has been successfully submitted. We will contact you shortly.',
      });

      // Reset the form fields
      setBooking({
        email: "",
        name: "",
        mobile: "",
        device: "",
        service: "",
        booking_date: "",
        issue: ""
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      // Handle error
      console.error('Error submitting booking:', error);
      // Show error notification if necessary
      notification.error({
        message: 'Booking Failed',
        description: 'There was an error while submitting your booking. Please try again later.',
      });
    }
  }

  return (
    <div className='booking'>
      <h1 style={{ color: 'gold' }}>Make a Booking</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='email' value={email} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">Name</label>
          <input type="text" name='name' value={name} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputName1" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPnum1" className="form-label">Mobile Number</label>
          <input type="text" name='mobile' value={mobile} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputPnum1" />
        </div>
        <div className="mb-3">
          <label>Device Type</label>
          <select value={selectedDevice} onChange={(e) => handleChange(e, setSelectedDevice)}>
            {Object.keys(deviceOptions).map((option) => (
              <option key={option} value={option}>
                {deviceOptions[option]}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Service Type</label>
          <select value={selectedService} onChange={(e) => handleChange(e, setSelectedService)}>
            {Object.keys(serviceOptions).map((option) => (
              <option key={option} value={option}>
                {serviceOptions[option]}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label for="exampleInputDate1" className="form-label">Booking Date</label>
          <input type="text" placeholder='YYYY/MM/DD' name='booking_date' value={booking_date} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputDate1" />
        </div>
        <div className="mb-3">
          <label >Describe the issue</label>
          <textarea name='issue' value={issue} onChange={(e) => onInputChange(e)}></textarea>
        </div>
        <button type="submit" classNameName="btn btn-primary">Submit</button>
        <h2>We'll contact you. Have a nice day !</h2>
      </form>
    </div>
  )
}

export default Booking

