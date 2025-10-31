import React, { useState, useEffect } from "react";
import { eventData } from "../eventData";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const categoryAnimations = [
  { card: "zoom-in", content: "fade-up" },
  { card: "flip-left", content: "fade-right" },
  { card: "flip-up", content: "fade-up" },
];

const EventZonesBootstrap = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleMoreDetails = (zone) => {
    navigate("/zone-details", { state: { zone } });
  };

  return (
    <div className="bg-dark text-light min-vh-100 p-4">
      {/* Header Section */}
      <div
        className="container mb-4 p-4 rounded-3 shadow-sm"
        style={{
          background: "linear-gradient(135deg, #1e1e2f, #282a36, #20232a)",
          border: "1px solid rgba(0,229,255,0.3)",
        }}
      >
        <h5
          className="text-center fw-bold mb-3"
          style={{
            background: "linear-gradient(90deg, #00e5ff, #ff4081, #ffcc00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to CYBERFLIX – Masters of Innovation
        </h5>
        <p className="text-light" style={{ lineHeight: 1.6 }}>
          The robotics event features hands-on robotics missions, challenges, and innovation-driven tasks that bring out teamwork, strategic thinking, and real-world applications.
        </p>
      </div>

      {/* Tabs Section */}
      <ul className="nav nav-tabs justify-content-center mb-1">
        {eventData.map((cat, i) => (
          <li className="nav-item" key={i}>
            <button
  className={`nav-link ${tab === i ? "active" : ""}`}
  onClick={() => setTab(i)}
>
  {cat.category}
</button>

          </li>
        ))}
      </ul>

      {/* Cards Section */}
      <div className="container">
        {eventData[tab].zones.map((zone, i) => (
          <div
            key={i}
            className="card mb-4 flex-row flex-wrap align-items-center shadow-sm"
            style={{
              transition: "0.3s",
              background: "linear-gradient(145deg, #1e1e2f, #2c2c44, #1c1c2a)",
              borderRadius: "15px",
              overflow: "hidden",
            }}
            data-aos={categoryAnimations[tab].card}
            data-aos-delay={i * 100}
          >
            {/* Left Image */}
            <div className="col-12 col-md-4 p-0">
              <img
                src={zone.image}
                alt={zone.name}
                className="img-fluid h-100 w-100"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Right Content */}
<div className="col-12 col-md-8 p-4 d-flex flex-column justify-content-center">
  {/* Zone Name */}
  <h5
    className="fw-bold"
    style={{
      background: "linear-gradient(90deg, #ff0080, #7928ca, #00e5ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {zone.name}
  </h5>

  {/* Play Type */}
  <h6
    style={{
      background: "linear-gradient(90deg, #ffcc00, #ff4081, #00e5ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {zone.play}
  </h6>

  {/* Backstory */}
  <p className="text-light mt-2">{zone.backstory.substring(0, 150)}...</p>

  {/* NOTE for Lumina Forge and Nexathon */}
  {(zone.name === "LUMINA FORGE" || zone.name === "NEXATHON") && (
    <p className="text-warning fw-bold mt-2">
      NOTE: Participants will be provided with a robot to play in this zone.
    </p>
  )}

  {/* Buttons Container */}
<div className="d-flex gap-3 mt-2">
  {/* Register Now Button */}
<button
  className="btn"
  style={{
    background: "linear-gradient(90deg, #00e5ff, #ff0080, #ffcc00)",
    color: "black",
    border: "none",
    flex: "1",
  }}
  onClick={() => handleMoreDetails(zone)}
>
  Register Now
</button>

{/* Extra Button for Dragon Vault and Nautica Quest */}
{(zone.name === "DRAGON VAULT" || zone.name === "NAUTICA QUEST") && (
  <button
    className="btn"
    style={{
      background: "linear-gradient(90deg, #ff4081, #00e5ff, #ffcc00)",
      color: "black",
      border: "none",
      flex: "1",
      textAlign: "center",
    }}
    onClick={() => handleMoreDetails(zone)}
  >
    Purchase Your Robot
  </button>
)}

</div>

</div>

          </div>
        ))}
      </div>

      {/* Hover shadow effect */}
      <style jsx>{`
        .card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 0 25px rgba(0, 229, 255, 0.6) !important;
        }
        .text-gradient {
          background: linear-gradient(90deg, #00e5ff, #ff4081, #ffcc00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default EventZonesBootstrap;
