import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseData from "../CourseData/CourseData";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import { assets } from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const course = courseData[courseName];
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!course) {
    return (
      <div className="text-center mt-5" data-aos="fade-in">
        <h2 className="text-danger">Course not found!</h2>
        <button onClick={() => navigate(-1)} className="btn btn-primary mt-3">
          ← Back to Courses
        </button>
      </div>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mt-4">
        <button onClick={() => navigate(-1)} className="btn btn-outline-primary mb-3">
          ← Back to Courses
        </button>

        <div className="row">
          <div className="col-md-6 text-center" data-aos="zoom-in">
            <img src={course.image} alt={course.title} className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-bold">{course.title}</h2>
            <p><strong>📚 Grade:</strong> {course.grade}</p>
            <p><strong>🔧 Skill Level:</strong> {course.skillLevel}</p>
            <p><strong>⏳ Duration:</strong> {course.duration}</p>
            <p>{course.description}</p>
            <button 
              className="btn btn-warning btn-lg mt-3 fw-bold shadow me-3"
              onClick={() => navigate(`/enroll/${courseName}`)}
            >
              🔥 Enroll Now
            </button>
            <button 
              className="btn btn-warning btn-lg mt-3 fw-bold shadow"
              onClick={() => navigate(`/enroll/${courseName}`)}
            >
              🔥 Get Free Demo
            </button>
          </div>
        </div>

        <h3 className="mt-4 text-primary" data-aos="fade-up">🔍 What You Will Learn</h3>
        <ul className="list-group mb-4" data-aos="fade-up">
          {course.learnings.map((item, index) => (
            <li key={index} className="list-group-item">✅ {item}</li>
          ))}
        </ul>




        <h3 className="text-primary" data-aos="fade-up">⭐ Student Testimonials</h3>
        <div className="row">
          {course.testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4" data-aos="zoom-in">
              <div className="card shadow p-3 mb-3">
                <div className="card-body">
                  <p className="card-text">"{testimonial}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-primary" data-aos="fade-up">❓ Frequently Asked Questions</h3>
        <div className="accordion mb-4" id="faqAccordion">
          {course.faqs.map((faq, index) => (
            <div className="accordion-item" key={index} data-aos="fade-up">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openFaq === index ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  Q: {faq.question}
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${openFaq === index ? "show" : ""}`}
                data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="container my-5">
          <div className="certificate-section text-center py-5 px-4 rounded" data-aos="fade-up">
            <h2 className="fw-bold text-dark">🎓 Earn Your Certificate of Completion</h2>
            <p className="text-muted fs-5 mt-3">
              Upon successful completion of this course, you'll receive an industry-recognized certificate 
              to showcase your new skills and boost your career.
            </p>
            <div className="d-flex justify-content-center">
              <img 
                src={assets.CourseCompletion} 
                alt="Course Completion Certificate" 
                className="img-fluid certificate-image"
              />
            </div>
          </div>

          <div className="enrollment-section text-center py-5 px-4 rounded mt-5" data-aos="fade-up">
            <h2 className="fw-bold text-white">🚀 Ready to Elevate Your Skills?</h2>
            <p className="text-white-50 fs-5 mt-3">
              Join thousands of learners who have transformed their careers with our expertly crafted courses.
            </p>
            <button 
              className="btn btn-warning btn-lg mt-3 fw-bold shadow"
              onClick={() => navigate(`/enroll/${courseName}`)}
            >
              🔥 Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
