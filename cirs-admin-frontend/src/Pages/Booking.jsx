import React from 'react'
import './css/Booking.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { notification } from 'antd'
import { Link, useParams } from 'react-router-dom';

const Booking = () => {

  const [bookings, setBooking] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const result = await axios.get("http://localhost:8080/cusBookings");
    setBooking(result.data);
  }

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/cusBooking/${id}`);
      loadBookings();
      notification.success({
        message: 'Success',
        description: `Booking id ${id} deleted successfully`,
      });
    } catch (error) {
      console.error('Error deleting booking:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to delete booking',
      });
    }
  }

  return (
    <div className='container-fluid'>
      <h1>Bookings</h1>
      <table class="table table-striped" style={{ background: 'white' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Device</th>
            <th scope="col">Service</th>
            <th scope="col">Booking Date</th>
            <th scope="col">Issue</th>
            <th scope="col">New Booking</th>
            <th scope="col">Other Details</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            bookings.map((booking, index) => (
              <tr>
                <th scope="row" key={index}>{booking.id}</th>
                <td>{booking.email}</td>
                <td>{booking.name}</td>
                <td>{booking.mobile}</td>
                <td>{booking.device}</td>
                <td>{booking.service}</td>
                <td>{booking.booking_date}</td>
                <td>{booking.issue}</td>
                <td>{booking.new_booking}</td>
                <td>{booking.other_details}</td>
                <td>{booking.status}</td>
                <td>
                  <Link to={`/bookingForm/${booking.id}`}><button className='btn btn-primary mx-1'>Update</button></Link>
                  <button className='btn btn-danger mx-1' onClick={() => deleteBooking(booking.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Booking