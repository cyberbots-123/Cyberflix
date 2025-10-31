import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { CiShoppingCart } from "react-icons/ci";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home3.css";

const sensors = [
  { name: "IR Sensor", description: "Detects infrared light, commonly used in obstacle detection.", image: assets.IR_Sensor },
  { name: "LDR Sensor", description: "Measures light intensity and is used in light-dependent circuits.", image: assets.LDR_Sensor },
  { name: "Ultrasonic Sensor", description: "Measures the distance by using ultrasonic waves.", image: assets.Ultrasonic_Sensor },
  { name: "Arduino Uno R3", description: "A microcontroller board used for building electronics projects.", image: assets.Arduino_Uno_R3 },
];

const Home3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-4" data-aos="zoom-in">
        <h2 className="text-primary fw-bold">Top Selling Kits & Components</h2>
        <p className="text-muted">Find The Best Components For Your projects</p>
      </div>
      <div className="row gy-4">
        {sensors.map((sensor, index) => (
          <div
            className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="custom-card">
              <div
                className="custom-card-image"
                style={{ backgroundImage: `url(${sensor.image})` }}
              ></div>
              <div className="custom-card-body text-center">
                <h5 className="fw-bold">{sensor.name}</h5>
                <p className="text-muted">{sensor.description}</p>
                <button
                  className="btn btn-buy d-flex align-items-center justify-content-center mx-auto"
                  onClick={() => navigate('/products')}
                >
                  <CiShoppingCart size={20} />&nbsp; Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5" data-aos="fade-up">
        <button
          className="btn btn-primary btn-lg px-5"
          onClick={() => navigate('/products')}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Home3;
