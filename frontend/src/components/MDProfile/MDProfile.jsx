import React, { useEffect } from 'react';
import './MDProfile.css';
import { assets } from '../../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MDProfile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="md-profile-section" data-aos="fade-up">
      <div className="md-profile-container">
        <img
          src={assets.MD}
          alt="Managing Director"
          className="md-photo"
          data-aos="zoom-in"
        />
        <div className="md-info" data-aos="fade-left">
          <h2 className="md-name">Mr. VIGNESH KUMAR</h2>
          <h4 className="md-title">Managing Director, Cyberbots</h4>
          <div className="md-quotes">
            <p>“We are not just teaching students to use technology — we are shaping the minds that will create it.”</p>
            <p>“Our mission is to ignite innovation in every young mind and build a future where ideas turn into impact.”</p>
            <p>“The future doesn’t belong to those who wait. It belongs to those who prepare — and that’s exactly what we do at CYBERBOTS.”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MDProfile;
