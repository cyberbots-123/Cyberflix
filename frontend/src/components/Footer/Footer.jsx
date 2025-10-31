import React from 'react';
import "./Footer.css";
import { assets } from '../../assets/assets';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img src={assets.logo1} alt="Logo" className="footer-logo" />
          <p>
            We provide high-quality electronic components and kits to help you
            bring your projects to life. Explore, learn, and build with us!
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/15HG8QXYyn/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/team_cyberbots/profilecard/?igsh=MWV5ODNjYTd3cWp4cA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/cyberbots-robo-technologies/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://youtube.com/@cyberbots-2024?si=9SDFRwIhhpqHA1dK" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/aboutus">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <FaEnvelope className="contact-icon" /> 
            Email: <a href="mailto:info@cyberbots.in">info@cyberbots.in</a>
          </p>
          <p>
            <FaPhoneAlt className="contact-icon" />
            Phone: <a href="tel:+917358039311">+91 73580 39311</a>
          </p>
          <p>
            <FaMapMarkerAlt className="contact-icon" />
            Address: No.62, Ravi colony 1st street, St Thomas Mount, Chennai - 600016
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Cyberbots. All Rights Reserved.</p>
        <a href="/terms-and-conditions">Terms & Conditions</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
