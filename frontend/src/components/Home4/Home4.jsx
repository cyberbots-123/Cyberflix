import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { assets } from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Home4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center" data-aos="zoom-in-up">
          <img
            src={assets.homebg4}
            alt="Why Choose Us"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <h2 className="fw-bold text-primary">Why Choose Us</h2>
          <p className="text-muted fs-5">
            50+ Experts are ready to train your ward equipping them with
            Future - Ready Skills.
          </p>
          <p className="text-dark">
            Learn anytime, anywhere - Learn through online videos by world-class
            faculties at your own convenience. Get assistance on projects and
            reinforce concepts through weekly sessions.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0">✅ World Class Faculty</li>
            <li className="list-group-item border-0">✅ Easy Learning</li>
            <li className="list-group-item border-0">✅ Flexible</li>
            <li className="list-group-item border-0">✅ Affordable</li>
          </ul>
        </div>
      </div>
      <div className="row text-center mt-5">
        {[
          { number: "5 Lakh", text: "Students Trained", icon: "🎓" },
          { number: "25,000+", text: "Sessions Completed", icon: "📚" },
          { number: "98%", text: "Satisfaction Rate", icon: "👍" },
          { number: "50+", text: "Client Base", icon: "🌍" },
        ].map((stat, index) => (
          <div
            className="col-6 col-md-3 mb-4"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="card shadow border-0 rounded text-center p-3 bg-light">
              <div className="card-body">
                <h3 className="fw-bold text-success">
                  {stat.icon} {stat.number}
                </h3>
                <p className="text-muted">{stat.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home4;
