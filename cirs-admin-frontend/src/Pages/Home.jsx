import React from 'react'
import axios from 'axios';
import './css/Home.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {

  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('name');

  const searchOptions = [
    { value: 'name', label: 'Search by Name' },
    { value: 'device', label: 'Search by Device' },
    { value: 'email', label: 'Search by Email' },
    { value: 'mobile', label: 'Search by Mobile' },
    { value: 'status', label: 'Search by Status' }
  ];

  const loadBookings = async () => {
    let result;
    if (selectedOption === 'name') {
      result = await axios.get(`http://localhost:8080/cusBookingsByName/${searchQuery}`);
    } else if (selectedOption === 'device') {
      result = await axios.get(`http://localhost:8080/cusBookingsByDevice/${searchQuery}`);
    } else if (selectedOption === 'email') {
      result = await axios.get(`http://localhost:8080/cusBookingsByEmail/${searchQuery}`);
    } else if (selectedOption === 'mobile') {
      result = await axios.get(`http://localhost:8080/cusBookingsByMobile/${searchQuery}`);
    } else if (selectedOption === 'status') {
      result = await axios.get(`http://localhost:8080/cusBookingsByStatus/${searchQuery}`);
    }
    setBookings(result.data);
  }
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  const handleSearch = () => {
    loadBookings();
  }

  return (
    <div className='container-fluid'>
      <div className="home-class">
        <select value={selectedOption} style={{ width: '200px' }} onChange={handleSearchOptionChange}>
          {searchOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder={`Search by ${selectedOption}`}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className='btn btn-primary' onClick={handleSearch}>Search</button>
      </div>
      <div>
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
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home