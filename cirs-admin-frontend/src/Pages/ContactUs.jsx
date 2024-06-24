import React from 'react'
import './css/ContactUs.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { notification } from 'antd';
import { Link } from 'react-router-dom';

const ContactUs = () => {

  const [contacts, setContact] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const result = await axios.get("http://localhost:8080/cusContacts");
    setContact(result.data);
  }

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/cusContact/${id}`);
      loadContacts();
      notification.success({
        message: 'Success',
        description: `Contact id ${id} deleted successfully`,
      });
    } catch (error) {
      console.error('Error deleting contact:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to delete contact',
      });
    }
  }

  return (
    <div className='container-fluid'>
      <h1>Contacts</h1>
      <table class="table table-striped" style={{ background: 'white' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact, index) => (
              <tr>
                <th scope="row" key={index}>{contact.id}</th>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
                <button className='btn btn-danger' onClick={() => deleteContact(contact.id)}>Delete</button>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ContactUs