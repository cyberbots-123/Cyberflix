import React, { useEffect } from "react";
import "./Home02.css";
import { assets } from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Home02 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="home02">
      <div className="home02-header" data-aos="zoom-in">
        <h1>Welcome to Cyberbots</h1>
        <p>
          With 8 years of experience, Cyberbots is your gateway to Learn,
          Innovate and Success!
        </p>
      </div>
      <div className="home02-grid">
        <div className="home02-text" data-aos="flip-left">
          <p>
            Welcome to the original and most trusted EDU-Tech provider for kids and teens! No other STEM enrichment program can compete with our world-class instructors, iconic partners, prestigious campus locations, and exclusive courses that capture kids' interests and transform them into real-world STEM skills.
          </p>
          <p>
            Cyberbots is an investment in your kids' future. Whether they’re 7
            or 19, we guide them from beginner to college-bound pro. Our virtual
            and on-campus programs include access to expert educators and tools
            for long-term success.
          </p>
          <ul className="home02-features" data-aos="fade-up" data-aos-delay="200">
            <li data-aos="fade-up" data-aos-delay="300">Access to 100+ Top Client Schools</li>
            <li data-aos="fade-up" data-aos-delay="400">21st Century Skills</li>
            <li data-aos="fade-up" data-aos-delay="500">Industry - Relevant Courses</li>
          </ul>
        </div>
        <div className="home02-image" data-aos="flip-right">
          <img src={assets.home02bg} alt="Cyberbots Learning" />
        </div>
      </div>
    </section>
  );
};

export default Home02;
