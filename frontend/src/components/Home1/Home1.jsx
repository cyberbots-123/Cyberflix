import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home1.css";
import { assets } from "../../assets/assets";

const slides = [
  {
    title: "Center of Excellence for Skill Development and Entrepreneurship",
    description: "",
    video: assets.SkillVideo,
  },
  {
    title: "Affordable Technological courses",
    description: "",
    video: assets.Coursevideos,
  },
  {
    title: "Explore wide range of Electronics, Robotics, IoT components and Kits",
    description: "",
    video: assets.ElectroVideo,
  },
];

const Home1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFront, setIsFront] = useState(true);
  const navigate = useNavigate();

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const getNextIndex = (index) => (index + 1) % slides.length;

  const handleNext = () => {
    const nextIndex = getNextIndex(activeIndex);
    const frontVideo = isFront ? videoRef1.current : videoRef2.current;
    const backVideo = isFront ? videoRef2.current : videoRef1.current;

    backVideo.src = slides[nextIndex].video;
    backVideo.load();
    backVideo.play();

    backVideo.style.opacity = 1;
    frontVideo.style.opacity = 0;

    setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsFront(!isFront);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, [activeIndex, isFront]);

  const handleNavigate = () => {
    const title = slides[activeIndex].title;
    if (title.includes("Skill Development")) navigate("/events");
    else if (title.includes("Technological courses")) navigate("/courses");
    else if (title.includes("Robotics")) navigate("/products");
  };

  return (
    <div className="home1_container">
      <video
        ref={videoRef1}
        autoPlay
        muted
        loop
        playsInline
        className="home1_video"
        src={slides[0].video}
        style={{ opacity: isFront ? 1 : 0 }}
      />
      <video
        ref={videoRef2}
        autoPlay
        muted
        loop
        playsInline
        className="home1_video"
        style={{ opacity: isFront ? 0 : 1 }}
      />

      <div className="home1_slide">
        <h1>{slides[activeIndex].title}</h1>
        <p>{slides[activeIndex].description}</p>
        <div className="home1_buttons">
          <button className="btn custom-blue-btn" onClick={handleNavigate}>
            Explore Now
          </button>
        </div>
      </div>

      <button className="home1_arrow left" onClick={() => {
        let prevIndex = (activeIndex - 1 + slides.length) % slides.length;
        setActiveIndex(prevIndex);
      }}>❮</button>
      <button className="home1_arrow right" onClick={handleNext}>❯</button>

      <div className="home1_dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => {
              const nextIndex = index;
              const frontVideo = isFront ? videoRef1.current : videoRef2.current;
              const backVideo = isFront ? videoRef2.current : videoRef1.current;

              backVideo.src = slides[nextIndex].video;
              backVideo.load();
              backVideo.play();
              backVideo.style.opacity = 1;
              frontVideo.style.opacity = 0;
              setTimeout(() => {
                setActiveIndex(nextIndex);
                setIsFront(!isFront);
              }, 1000);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Home1;
