import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";


const Careers4 = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });

    axios
      .get("http://localhost:5000/api/jobopenings")
      .then((response) => setJobOpenings(response.data))
      .catch((error) => console.log("Error fetching jobs:", error));
  }, []);


  const handleApply = (jobId) => {
    navigate("/apply");
  };

  return (
    <div className="container py-5" data-aos="fade-up">
      <h2 className="text-center mb-4">Join Our Team</h2>
      <p className="text-center text-muted mb-5">
        Explore opportunities to build your future with us!
      </p>
      <div className="row g-4">
        {jobOpenings.map((job) => (
          <div
            className="col-md-6 col-lg-4"
            key={job._id}
            data-aos="zoom-in-up"
          >
            <div className="card h-100 border-0">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">
                  <span role="img" aria-label="location">
                    📍
                  </span>{" "}
                  {job.location}
                </p>
                <p className="card-text">
                  Start Date: <strong>{job.startDate}</strong>
                </p>
                <ul className="card-text ps-3">
  {job.description
    .split(";")
    .map((point) => point.trim())
    .filter((point) => point.length > 0)
    .map((point, index) => (
      <li key={index}>{point}</li>
    ))}
</ul>

                <p className="card-text">
                  Openings: <strong>{job.openings}</strong>
                </p>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleApply(job._id)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers4;
