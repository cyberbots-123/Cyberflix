import React, { useState } from "react";
import "./TronFAQ.css";

const TronFAQ = () => {
  const faqData = [
    {
      q: "What is the SV CYBERTRON 2K26?",
      a: "It is a premier inter-school robotics competition designed to foster innovation, teamwork, and hands-on STEM learning. It features multiple challenge zones, each tailored to specific grade groups."
    },
    {
      q: "Who can participate?",
      a: "Students from Grades 3 to 12 are eligible. Each grade group is mapped to specific zones and challenges."
    },
    {
      q: "Are prior robotics skills required?",
      a: "Prior knowledge is not mandatory. The event is inclusive and easy to follow, with clear instructions and support. Familiarity with bots and sensors can help but isn’t required. Once you register and book the training, our trainer will guide the kids with engaging, hands on learning and provide support whenever needed."
    },
    {
      q: "Is there a certificate or recognition for participants?",
      a: "Yes. All participants receive certificates. Winners receive trophies, medals, and cash prizes across 50+ categories."
    },
    {
      q: "Will CyberBots provide bots or should schools bring their own?",
      a: "Schools are encouraged to bring their own bots. However, support and guidance will be provided for teams needing assistance/ Repair."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="tron-faq-page">
      <h1 className="tron-faq-title">⚡Frequently Asked Questions ⚡</h1>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.q}
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>

            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TronFAQ;
