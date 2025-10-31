import React, { useEffect } from 'react';
import './CardList.css';
import { FaRobot, FaCloud, FaDatabase, FaRegChartBar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureCard = ({ title, hoverText, icon, aos }) => {
  return (
    <div className="feature-card" data-aos={aos}>
      <div className="feature-card-front">
        <h3 className="feature-card-title">{title}</h3>
      </div>
      <div className="feature-card-hover">
        <p>{hoverText}</p>
      </div>
    </div>
  );
};

const CardList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      title: 'Early Exposure to Future Technologies',
      hoverText: 'Cyberbots introduces Robotics, AI, and STEM education from an early age, helping students develop critical thinking, problem-solving, and technological literacy early in their academic journey.',
      aos: 'fade-up'
    },
    {
      title: 'Bridging the gap Between Theory and Practice',
      hoverText: 'Through hands-on learning kits, workshops, and integrated curriculum models, Cyberbots ensures that students don\'t just learn concepts—they apply them. This enhances engagement and deepens understanding.',
      aos: 'fade-right'
    },
    {
      title: 'Empowering Educators with Skill-Based Training',
      hoverText: 'Cyberbots trains teachers and equips them with the tools to deliver skill-based education effectively, ensuring sustainable knowledge transfer and long-term impact in classrooms.',
      aos: 'fade-left'
    },
    {
      icon: <FaRegChartBar size={50} />,
      title: 'Creating a Competitive, Innovation-Driven Mindset',
      hoverText: 'With national-level robotics competitions and structured internships, Cyberbots nurtures a culture of innovation, leadership, and competitive spirit, preparing students to become future-ready professionals.',
      aos: 'zoom-in'
    }
  ];

  return (
    <div className="feature-card-list-section py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">Explore Our Features</h2>
      <div className="feature-card-list">
        {cards.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            title={card.title}
            hoverText={card.hoverText}
            aos={card.aos}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
