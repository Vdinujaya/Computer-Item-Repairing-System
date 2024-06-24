import React from 'react'
import './css/Feedback.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { notification, Modal, Button, Form, Input } from 'antd';

const Feedback = () => {

  const [feedbakcs, setFeedback] = useState([]);
  const [replyModalVisible, setReplyModalVisible] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [replyContent, setReplyContent] = useState('');

  const { id } = useParams();

  const [feedbacks, setFeedbacks] = useState({
    email: "",
    name: "",
    feedback: "",
    reply: ""
  })

  const { email, name, feedback, reply, } = feedbacks

  const onInputChange = (e) => {
    setFeedbacks({ ...feedbacks, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    const result = await axios.get("http://localhost:8080/cusFeedbacks");
    setFeedback(result.data);
  }

  const deleteFeedback = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/cusFeedback/${id}`);
      loadFeedbacks();
      notification.success({
        message: 'Success',
        description: `Feedback id ${id} deleted successfully`,
      });
    } catch (error) {
      console.error('Error deleting contact:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to delete contact',
      });
    }
  }

  const handleReply = (feedback) => {
    setSelectedFeedback(feedback);
    setReplyModalVisible(true);
  }

  const handleCancelReply = () => {
    setSelectedFeedback(null);
    setReplyContent('');
    setReplyModalVisible(false);
  }

  const handleSendReply = async () => {
    try {
      await axios.put(`http://localhost:8080/cusFeedback/${id}`, feedbacks);
      setReplyContent('');
      setReplyModalVisible(false);
      loadFeedbacks();
      notification.success({
        message: 'Success',
        description: 'Reply sent successfully',
      });
    } catch (error) {
      console.error('Error sending reply:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to send reply',
      });
    }
  }

  return (
    <div className='container-fluid'>
      <h1>Feedbacks</h1>
      <table class="table table-striped" style={{ background: 'white' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Feedback</th>
            <th scope="col">Reply</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            feedbakcs.map((feedback, index) => (
              <tr>
                <th scope="row" key={index}>{feedback.id}</th>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.feedback}</td>
                <td>{feedback.reply}</td>
                <td>
                  <button className='btn btn-primary mx-2' onClick={() => handleReply(feedback)}>Reply</button>
                  <button className='btn btn-danger mx-2' onClick={() => deleteFeedback(feedback.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Modal
        title="Reply"
        visible={replyModalVisible}
        onCancel={handleCancelReply}
        footer={[
          <Button key="cancel" onClick={handleCancelReply}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSendReply}>
            Send
          </Button>,
        ]}
      >
        <Form>
          <Form.Item label="Feedback">
            <Input.TextArea value={selectedFeedback ? selectedFeedback.feedback : ''} disabled />
          </Form.Item>
          <Form.Item label="Reply">
            <Input.TextArea value={reply} name='reply' onChange={(e) => onInputChange(e)} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Feedback