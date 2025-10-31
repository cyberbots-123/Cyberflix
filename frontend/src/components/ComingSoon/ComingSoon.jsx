import React from "react";
import "./ComingSoon.css";
import { assets } from "../../assets/assets";


const ComingSoon = () => {
  return (
    <>
    <div
      className="coming-soon-wrapper d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${assets.TechBg || ""})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <div className="overlay"></div>
      <div className="coming-soon-content p-4 rounded shadow">
        <h1 className="display-4 fw-bold">🚧 Coming Soon...</h1>
        <p className="lead mt-3">
          We're building something amazing! Stay tuned for updates.
        </p>
        <div className="spinner-border text-warning mt-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default ComingSoon;
