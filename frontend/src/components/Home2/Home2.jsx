import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home2.css';

const courseDetails = {
  "Robotics": {
    Beginner: {
      description: "Learn the basics of robotics, including sensors, motors, and microcontrollers.",
      image: assets.Robotics_1
    },
    Intermediate: {
      description: "Work on advanced robotics projects like line-following or obstacle avoidance robots.",
      image: assets.Robotics_2
    },
    Advanced: {
      description: "Dive into AI-powered robotics, humanoid designs, and autonomous navigation.",
      image: assets.Robotics_3
    }
  },
  "AI": {
    Beginner: {
      description: "Understand the fundamentals of Artificial Intelligence and machine learning.",
      image: assets.AI_1
    },
    Intermediate: {
      description: "Build basic AI models using Python and libraries like TensorFlow or PyTorch.",
      image: assets.AI_2
    },
    Advanced: {
      description: "Master advanced AI topics, including neural networks, NLP, and computer vision.",
      image: assets.AI_3
    }
  },
  "3D Printing": {
    Beginner: {
      description: "Learn the basics of 3D printing, including setup and filament types.",
      image: assets.Three_d_1
    },
    Intermediate: {
      description: "Design and print functional 3D models using advanced slicing techniques.",
      image: assets.Three_d_2
    },
    Advanced: {
      description: "Master industrial-grade 3D printing techniques and multi-material printing.",
      image: assets.Three_d_3
    }
  },
  "Web Development": {
    Beginner: {
      description: "Learn HTML, CSS, and JavaScript to create basic websites.",
      image: assets.Web_1
    },
    Intermediate: {
      description: "Build dynamic web applications using React and Node.js.",
      image: assets.Web_2
    },
    Advanced: {
      description: "Master full-stack development, performance optimization, and deployment.",
      image: assets.Web_3
    }
  },
  "Data Science": {
    Beginner: {
      description: "Understand the basics of data science, including data cleaning and visualization.",
      image: assets.Data_1
    },
    Intermediate: {
      description: "Analyze data using tools like Pandas, NumPy, and Matplotlib.",
      image: assets.Data_2
    },
    Advanced: {
      description: "Create predictive models using machine learning and big data tools.",
      image: assets.Data_3
    }
  }
};

const Home2 = () => {
  const [selectedCourse, setSelectedCourse] = useState("Robotics");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold text-primary">Explore Our Top Courses</h2>
        <p className="text-muted">
          Choose a Course to Explore Beginner, Intermediate, and Advanced levels.
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-center mb-4" data-aos="zoom-in">
        {Object.keys(courseDetails).map((course, index) => (
          <button
            key={index}
            className={`btn m-2 px-4 py-2 fw-semibold ${selectedCourse === course ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSelectedCourse(course)}
            style={{ transition: "0.3s ease" }}
          >
            {course}
          </button>
        ))}
      </div>
      <div className="text-center" data-aos="fade-up">
        <h3 className="fw-bold">{selectedCourse}</h3>
      </div>

      <div className="row mt-4">
        {Object.entries(courseDetails[selectedCourse]).map(([level, { description, image }], index) => (
          <div
            key={index}
            className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="custom-card shadow-lg">
              <div className="custom-card-image" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="custom-card-body">
                <h5 className="fw-bold">{level}</h5>
                <p className="text-muted">{description}</p>
                <button
                  className="btn btn-primary btn-custom"
                  onClick={() =>
                    navigate(`/courses`)
                  }
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5" data-aos="fade-up">
        <button
          className="btn btn-primary btn-lg px-5"
          onClick={() => navigate('/courses')}
        >
          Explore More Courses
        </button>
      </div>
    </div>
  );
};

export default Home2;
