import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { notification } from 'antd'
import './css/BookingForm.css'
import { useNavigate, useParams } from 'react-router-dom'

const BookingForm = () => {

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

  const [booking, setBooking] = useState({
    email: "",
    name: "",
    mobile: "",
    device: "",
    service: "",
    booking_date: "",
    issue: "",
    new_booking: "",
    other_details: "",
    status: ""
  })

  const { email, name, mobile, booking_date, issue, new_booking, other_details, device, service } = booking

  const onInputChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadBookings()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/cusBooking/${id}`, { selectedStatus, ...booking, status: statusOptions[selectedStatus], });
      notification.success({
        message: 'Successfully updated',
        description: `Booking ${id} successfully updated`
      });

      navigate('/booking');

      setBooking({
        email: "",
        name: "",
        mobile: "",
        device: "",
        service: "",
        booking_date: "",
        issue: "",
        new_booking: "",
        other_details: "",
        status: ""
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      notification.error({
        message: 'Booking Failed',
        description: 'There was an error while submitting your booking. Please try again later.',
      });
    }
  }

  const loadBookings = async () => {
    const result = await axios.get(`http://localhost:8080/cusBooking/${id}`)
    const loadedBooking = result.data;
    setBooking(loadedBooking);
    setSelectedStatus(loadedBooking.status);
  }

  return (
    <div className='container-fluid'>
      <h1>Make a Booking</h1>
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
          <input type="text" name='device' value={device} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputPnum1" />
        </div>
        <div className="mb-3">
          <label>Service Type</label>
          <input type="text" name='service' value={service} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputDate1" />
        </div>
        <div className="mb-3">
          <label for="exampleInputDate1" className="form-label">Booking Date</label>
          <input type="text" name='booking_date' value={booking_date} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputDate1" />
        </div>
        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
          <label >Describe the issue</label>
          <textarea name='issue' value={issue} onChange={(e) => onInputChange(e)}></textarea>
        </div>
        <div className="mb-3">
          <label for="exampleInputDate1" className="form-label">New Booking Date</label>
          <input type="text" name='new_booking' value={new_booking} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputDate1" />
        </div>
        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
          <label >Other Details</label>
          <textarea name='other_details' value={other_details} onChange={(e) => onInputChange(e)}></textarea>
        </div>
        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Status</label>
          <select value={selectedStatus} onChange={(e) => handleChange(e, setSelectedStatus)}>
            {Object.keys(statusOptions).map((option) => (
              <option key={option} value={option}>
                {statusOptions[option]}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default BookingForm