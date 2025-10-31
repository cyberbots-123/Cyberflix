import React, { useEffect } from 'react';
import './StatsSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaSchool,
  FaUserGraduate,
  FaRobot,
  FaLaptopCode,
  FaUniversity,
  FaMapMarkedAlt,
  FaRegClock
} from 'react-icons/fa';

const stats = [
  {
    icon: <FaSchool className="stat-icon" />,
    number: '75+',
    title: 'Partner Schools',
    description: 'Collaborating with schools across the country to integrate robotics, AI, and STEM education into the core curriculum.'
  },
  {
    icon: <FaUserGraduate className="stat-icon" />,
    number: '1 Lakh',
    title: 'Students Trained',
    description: 'Empowered over 1,00,000 students with hands-on experience in future technologies like AI, robotics, and coding.'
  },
  {
    icon: <FaRobot className="stat-icon" />,
    number: '30+',
    title: 'AI Labs Constructed',
    description: 'Established advanced AI and Robotics labs to provide students with real-world exposure to tech innovation.'
  },
  {
    icon: <FaLaptopCode className="stat-icon" />,
    number: '25+',
    title: 'Skill Development Courses',
    description: 'Offering a wide range of tech-focused courses designed to equip students with 21st-century skills.'
  },
  {
    icon: <FaUniversity className="stat-icon" />,
    number: '35+',
    title: 'Partner Colleges',
    description: 'Partnered with higher education institutions to bridge the gap between academia and industry with tech-driven programs.'
  },
  {
    icon: <FaMapMarkedAlt className="stat-icon" />,
    number: '38+',
    title: 'Locations',
    description: 'Our programs and labs span over 38+ locations across India, creating equitable access to future-ready learning.'
  },
  {
    icon: <FaRegClock className="stat-icon" />,
    number: '10',
    title: 'Years of Trust',
    description: 'A decade-long journey of innovation, impact, and building a tech-savvy generation ready to lead the future.'
  }
];

const StatsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="stats-section" data-aos="fade-up">
      <h2 className="stats-heading">Think by the numbers<span>*</span></h2>
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index} data-aos="zoom-in-up" data-aos-delay={index * 100}>
            <div className="stat-row">
              <h3 className="stat-number">{item.number}</h3>
              {item.icon}
            </div>
            <h4 className="stat-title">{item.title}</h4>
            <p className="stat-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
