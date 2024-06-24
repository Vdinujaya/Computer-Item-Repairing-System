import React, { useEffect } from 'react'
import './CSS/Feedback.css'
import axios from 'axios'
import { useState } from 'react'
import { notification } from 'antd'

const Feedback = () => {

    const [Feedback, setFeedback] = useState({
        name: '',
        email: '',
        feedback: ''
    })

    const [Feedbakcs, setFeedbacks] = useState([]);

    useEffect(() => {
        loadFeedbacks();
    }, [])

    const { name, email, feedback } = Feedback

    const onInputChange = (e) => {
        setFeedback({ ...Feedback, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/cusFeedback", Feedback);
            notification.success({
                message: 'Feedback Submitted',
                description: 'Thank you for your feedback!',
            });
            setFeedback({
                name: '',
                email: '',
                feedback: ''
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            // Handle error
            console.error('Error submitting feedback:', error);
            // Show error notification if necessary
            notification.error({
                message: 'Feedback Submission Failed',
                description: 'There was an error while submitting your feedback. Please try again later.',
            });
        }
    }

    const loadFeedbacks = async () => {
        const result = await axios.get("http://localhost:8080/cusFeedbacks");
        setFeedbacks(result.data);
    }

    return (
        <div className='feedback'>
            <div className="feedback-title">
                <h1 style={{ color: 'gold' }}>Give a Feedback</h1>
                <h2>It will help us to improve</h2>
            </div>
            <div className="feedback-form">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="feedback-name-email">
                        <div className="feedback-name">
                            <input type="text" placeholder='Your Name' name='name' value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="feedback-email">
                            <input type="email" placeholder='Your Email' name='email' value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                    </div>
                    <div className="feedback-textarea">
                        <textarea placeholder='Your Feedback' name='feedback' value={feedback} onChange={(e) => onInputChange(e)}></textarea>
                    </div>
                    <div className="feedback-button">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <div className="feedback-show">
                <div className="feedback-show-title">
                    <h1 style={{ fontSize: '100px', color: 'gold' }}>Feedbacks</h1>
                </div>
                <div className="feedback-container">
                    {Feedbakcs.map((feedb, index) => (
                        <div key={index} className="feedback-item">
                            <div className="feedback-header">
                                <div className="feedback-name-cus">{feedb.name}</div>
                                <div className="feedback-email-cus">{feedb.email}</div>
                            </div>
                            <div>
                                <div className="feedback-feedback-cus">{feedb.feedback}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feedback