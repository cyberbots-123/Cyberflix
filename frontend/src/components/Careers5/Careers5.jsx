import React, { useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { assets } from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Careers5 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5" data-aos="fade-up">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <img
            src={assets.careerbg5}
            alt="Career Background"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <p className="text-uppercase text-muted fw-bold mb-2">- Our Values -</p>
          <h2 className="fw-bold mb-3">What You'll Experience at Cyberbots:</h2>
          <div className="mb-3" data-aos="zoom-in-up">
            <h5 className="d-flex align-items-center">
              <FaRegLightbulb className="me-2 text-primary" />
              Positive Work Culture
            </h5>
            <p className="text-muted">
              Collaborative, respectful and people-first - Where idea is welcome and every voice is heard.
            </p>
          </div>

          <div className="mb-3" data-aos="zoom-in-up" data-aos-delay="200">
            <h5 className="d-flex align-items-center">
              <GiOnTarget className="me-2 text-primary" />
              Meaningful Work
            </h5>
            <p className="text-muted">
              Contribute to real change in classrooms and communities by shaping the next generation of innovators.
            </p>
          </div>

          <div data-aos="zoom-in-up" data-aos-delay="400">
            <h5 className="d-flex align-items-center">
              <FaProjectDiagram className="me-2 text-primary" />
              Learning & Growth
            </h5>
            <p className="text-muted">
              Continuous skill-building, mentorship and opportunities to expand your knowledge across functions.
            </p>
          </div>

          <div className="mb-3" data-aos="zoom-in-up" data-aos-delay="200">
            <h5 className="d-flex align-items-center">
              <GiOnTarget className="me-2 text-primary" />
              Freedom to innovate
            </h5>
            <p className="text-muted">
              Be bold, experiment and bring your ideas to life in a flexible and creative environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers5;
