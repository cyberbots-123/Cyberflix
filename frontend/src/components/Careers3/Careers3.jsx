import React, { useEffect } from "react";
import { IoCloudDone } from "react-icons/io5";
import { assets } from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Careers3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <p className="text-uppercase text-muted fw-bold">- Benefits -</p>
          <h1 className="fw-bold mb-3">Life at Cyberbots</h1>
          <p className="text-muted mb-4">Where Innovation meets Impact.</p>
          <p className="text-muted mb-3">
            At Cyberbots, we're on a mission to inspire young minds through technology - and we know that begins with empowering our own people. Life here is all about purpose-driven work, growth, collaboration and making a difference every single day.
          </p>
          <p className="text-muted">
            Whether you're mentoring students, creating educational content or driving operations your role matters. You'll be part of a supportive, forward-thinking team that values your contributions and invests in your success.
          </p>
        </div>
        <div
          className="col-md-6 text-center"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <img
            src={assets.BDM}
            alt="Career Background Image"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Careers3;
