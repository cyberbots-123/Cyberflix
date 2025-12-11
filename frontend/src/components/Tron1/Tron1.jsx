import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Tron1.css";

const Tron1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="tron-dark-section">
      <div className="scan-lines"></div>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SECTION */}
          <div className="col-lg-6 col-md-8 tron-left-box" data-aos="fade-right">
            <img
              src={assets.Cybertron_Logo}
              alt="Logo"
              className="tron-left-logo mb-4"
            />

            {/* GLITCH TITLE */}
            <h1 className="tron-left-title glitch" data-text="SV CYBERTRON 2K26">
              SV CYBERTRON 2K26
            </h1>

            <p className="tron-left-desc">
              Enter the world of <span className="neon-text">SV CYBERTRON</span>.
              Experience futuristic challenges, compete with advanced bots,
              and rise as the ultimate innovator.
            </p>

            <button
  className="tron-left-btn"
  onClick={() => {
    document.getElementById("tron3-section")
      .scrollIntoView({ behavior: "smooth" });
  }}
>
  Register Now <span className="btn-ripple"></span>
</button>

          </div>

          {/* RIGHT SECTION */}
          <div
            className="col-lg-6 col-md-4 tron-right-box d-flex justify-content-center"
            data-aos="fade-left"
          >
            <img
              src={assets.Tron_Robo}
              alt="Cyber Robot"
              className="tron-right-image floating-robot"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tron1;
