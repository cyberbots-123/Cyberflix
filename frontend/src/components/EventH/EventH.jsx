import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./EventH.css";

const EventH = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div
      className="event-section d-flex align-items-center text-white"
      style={{ backgroundImage: `url(${assets.EventH})` }}
    >
      {/* Floating Center Image (slide in after 2s) */}
      <div
        className="floating-image-wrapper"
        data-aos="fade-right"
        data-aos-delay="2000"
      >
        {/* <img
          src={assets.Word}
          alt="Floating Logo"
          className="floating-image"
        /> */}
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div
            className="col-lg-6 col-md-8 col-12 event-card p-4 p-md-5 text-center text-md-start"
            data-aos="fade-right"
          >
            <img
              src={assets.Cyberflix_Logo}
              alt="Cyberflix Logo"
              className="mb-4 event-logo"
              data-aos="fade-down"
              data-aos-delay="300"
            />
            <h1
              className="event-title mb-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Cyberflix 2026
            </h1>
            <p
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Step into the future with <strong>Cyberflix</strong> – the ultimate
              robotics Premier League. Compete, innovate, and showcase your creativity
              for a chance to win <span className="highlight">Exciting Prizes</span>.
            </p>

            {/* Register Button opens Google Form */}
            <a
              href="https://docs.google.com/forms/d/1MCW2VkkbIeub7JzScvNr2595juP_Smqinrv7VbQ3uzg/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg px-4 register-btn"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Register Now
            </a>
          </div>

          {/* Right Empty Column (desktop only for spacing) */}
          <div className="col-lg-6 d-none d-lg-block"></div>
        </div>
      </div>
    </div>
  );
};

export default EventH;
