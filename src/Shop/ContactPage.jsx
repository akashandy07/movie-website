import React, { useState } from 'react'
import './About.css'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form Submitted:', formData)
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="contact-wrapper">

            {/* Hero */}
            <div className="contact-hero">
                <h1>📩 Contact Us</h1>
                <p>Have a question or feedback? We'd love to hear from you.</p>
            </div>

            <div className="contact-container">

                {/* Info Cards */}
                <div className="contact-info">
                    <div className="info-card">
                        <span>📧</span>
                        <h3>Email</h3>
                        <p>akashandy07@gmail.com</p>
                    </div>
                    <div className="info-card">
                        <span>🌐</span>
                        <h3>Website</h3>
                        <p>www.cineworld.com</p>
                    </div>
                    <div className="info-card">
                        <span>🕐</span>
                        <h3>Support Hours</h3>
                        <p>Mon – Fri, 9am – 6pm</p>
                    </div>
                    <div className="info-card">
                        <span>📍</span>
                        <h3>Location</h3>
                        <p>kotagiri, Tamil Nadu, India</p>
                    </div>
                </div>

                {/* Form */}
                <div className="contact-form-box">
                    <h2>Send a Message</h2>

                    {submitted && (
                        <div className="success-msg">
                            ✅ Message sent successfully! We'll get back to you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="What is this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            🚀 Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactPage