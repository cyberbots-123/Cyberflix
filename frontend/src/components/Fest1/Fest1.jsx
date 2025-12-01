import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Fest1.css";

const Fest1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div
      className="fest1-hero-wrapper d-flex align-items-center text-white"
      style={{ backgroundImage: `url(${assets.Fest1Banner})` }}
    >
      {/* Floating Center Image */}
      <div
        className="fest1-floating-wrapper"
        data-aos="fade-left"
        data-aos-delay="2000"
      >
        {/* <img src={assets.FestIcon} alt="Fest Icon" className="fest1-floating-img" /> */}
      </div>

      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SPACE */}
          <div className="col-lg-6 d-none d-lg-block"></div>

          {/* RIGHT CARD */}
          <div
            className="col-lg-6 col-md-10 col-12 fest1-info-card p-4 p-md-5 text-center text-md-start"
            data-aos="fade-left"
          >
            <img
              src={assets.Cyberfest_Logo}
              alt="Fest Logo"
              className="mb-4 fest1-logo-img"
              data-aos="fade-down"
              data-aos-delay="300"
            />

            <h1
              className="fest1-title mb-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              CYBERFEST 2026
            </h1>

            <p
              className="mb-4 fest1-desc"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Welcome to <strong className="fest1-strong">CYBERFEST 2026</strong> –
              a vibrant celebration of technology, creativity, innovation, and youth spirit.
              Compete, showcase, and shine with
              <span className="fest1-highlight"> exciting rewards</span>.
            </p>

            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg px-4 fest1-btn"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Register Now
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Fest1;
