import React, { useEffect } from 'react';
import "./About4.css";
import { assets } from '../../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about4-container" data-aos="fade-up">
      <div className="about4-content" data-aos="fade-right">
        <h1>Gamified learning for long-term success</h1>
        <p>
          Experience The Cyberbots Pathway™, our proprietary, gamified learning system! Your child will start at L1 and gain XP (experience points) for each completed on-campus or online course. They'll work hard and play hard to unlock a love of learning and prove mastery, ultimately earning the badge of L10—the marker of pre-collegiate excellence. They’ll receive a personalized letter of recommendation from our CEO, get an exclusive badge for their portfolio and LinkedIn, and attract attention from top universities and future employers.
        </p>
      </div>
      <img src={assets.GroupPic} alt="Think Forum Group" data-aos="fade-left" />
    </div>
  );
};

export default About4;
