import React, { useEffect } from 'react';
import './Careers2.css';
import { RiTeamFill } from 'react-icons/ri';
import { FaRegLightbulb, FaRegHandshake } from 'react-icons/fa';
import { IoManSharp } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Careers2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-light py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Grow  with a Company That Grows with You</h1>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6 col-lg-3" data-aos="fade-up">
            <div className="career-card text-center border-0 shadow-sm p-4">
              <RiTeamFill className="text-primary mb-3" size={40} />
              <h5 className="fw-bold">Purpose That Power Progress</h5>
              <p className="text-muted">At Cyberbots, every role fuels a larger vision - to inspire, educate, and empower the next generation through transformative tech and hands-on innovation.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="career-card text-center border-0 shadow-sm p-4">
              <FaRegLightbulb className="text-primary mb-3" size={40} />
              <h5 className="fw-bold">A Culture of Connection</h5>
              <p className="text-muted">We don't just work together - we build, brainstorm and celebrate as one team. Collaboration and mutual support are at the heart of everything we do.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="career-card text-center border-0 shadow-sm p-4">
              <FaRegHandshake className="text-primary mb-3" size={40} />
              <h5 className="fw-bold">Growth without Limits</h5>
              <p className="text-muted">Whether you're exploring new tools, gaining certifications or diving into cross-functional projects, we're committed to your continuous learning and development.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="career-card text-center border-0 shadow-sm p-4">
              <IoManSharp className="text-primary mb-3" size={40} />
              <h5 className="fw-bold">Impact That Matters</h5>
              <p className="text-muted">Your work goes beyond a desk. It reaches classrooms, shapes young minds, and leaves a lasting mark on schools and communities nationalwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers2;
