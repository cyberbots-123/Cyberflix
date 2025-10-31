import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contactus.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact/submit", formData);
      toast.success("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container-fluid bg-primary py-5">
      <div className="text-center mb-4 text-white" data-aos="fade-down">
        <h1 className="fw-bold">Contact Us</h1>
        <p>Let's start something great together. Get in touch today!</p>
      </div>

      <div className="container">
        <div className="row bg-white rounded shadow p-4" data-aos="zoom-in">
          <div className="col-md-6 bg-light p-4 rounded" data-aos="fade-right">
            <h2 className="text-dark fw-bold">Get in Touch</h2>
            <p className="text-muted">Our team is available remotely. Please email us to request a callback.</p>

            <h5 className="text-primary fw-bold">Email</h5>
            <p className="fw-bold text-secondary">info@cyberbots.in</p>

            <h5 className="text-primary fw-bold">St.Thomas Mount Office</h5>
            <p className="text-muted">No.62, Ravi Colony 1st street, St.Thomas Mount,<br /> Chennai-600016</p>

            <h5 className="text-primary fw-bold">Nandhanam Office</h5>
            <p className="text-muted">Door.No:- 71,73, CIT Nagar, 1st main road, CIT Nagar, Nandhanam, Chennai-600035</p>
          </div>
          <div className="col-md-6 p-4" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-dark">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control border-secondary"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label text-dark">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control border-secondary"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-dark">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control border-secondary"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-dark">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control border-secondary"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-dark">Message</label>
                <textarea
                  name="message"
                  className="form-control border-secondary"
                  rows="4"
                  placeholder="Type your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-purple w-100 fw-bold text-white">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-4" data-aos="fade-up">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4119128433867!2d80.19915937358975!3d13.009420614050965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267701fbc9f41%3A0x5a3ac7873bc9fe47!2sCyberbots%20Robo%20Technologies!5e0!3m2!1sen!2sin!4v1740389963211!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="colored"
      />
    </div>
  );
};

export default Contactus;