import React, { useState, useEffect, useRef } from "react";
import "./Courses2.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses2 = () => {
  const navigate = useNavigate();
  const coursesRef = useRef(null);

  const grades = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const courses = [
    { name: "Robotics", image: assets.Robotics_1, description: "Learn the fundamentals of robotics, automation, and hands-on projects to build real-world robots.", grades: ["4","5","6","7","8","9","10","11","12"] },
    { name: "Artificial Intelligence", image: assets.AI_1, description: "Explore AI concepts including machine learning, neural networks, and real-life AI applications.", grades: ["9","10","11","12"] },
    { name: "3D Printing", image: assets.Three_d_3, description: "Discover 3D modeling, design, and printing technologies to create your own physical products.", grades: ["4","5","6","7","8","9","10","11","12"] },
    { name: "Web Development", image: assets.Web_1, description: "Master front-end and back-end development to build dynamic, interactive websites and applications.", grades: ["6","7","8","9","10","11","12"] },
    { name: "Data Science", image: assets.Data_1, description: "Learn data analysis, visualization, and machine learning techniques to derive insights from data.", grades: ["9","10","11","12"] },
    { name: "Financial Literacy", image: assets.Finance_2, description: "Understand financial management, budgeting, investing, and smart money habits for future success.", grades: ["8","9","10","11","12"] },
    { name: "STEM Education", image: assets.STEM_1, description: "Engage in hands-on STEM activities covering science, technology, engineering, and mathematics.", grades: ["1","2","3"] },
    { name: "Programming Languages", image: assets.Web, description: "Gain coding skills in Python, JavaScript, C++, and more to build software applications.", grades: ["4","5","6","7","8","9","10","11","12"] },
    { name: "IoT", image: assets.IOT, description: "Learn how smart devices connect and communicate through the Internet of Things (IoT) technology.", grades: ["6","7","8","9","10","11","12"] },
    { name: "Drone Technology", image: assets.Drone, description: "Explore drone engineering, flight mechanics, and applications in various industries.", grades: ["6","7","8","9","10","11","12"] }
  ];

  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredCourses = selectedGrade
    ? courses.filter(course => course.grades.includes(selectedGrade))
    : courses;

  const availableCourses = selectedGrade
    ? filteredCourses.map(course => course.name)
    : courses.map(course => course.name);

  return (
    <div className="courses-wrapper">
      <div className="video-banner" data-aos="fade-up">
        <video className="background-video" src={assets.CourseVideo} loop autoPlay muted />
        <div className="video-overlay">
          <h2>Cyberbots Tech Courses 🚀</h2>
          <p>Explore our Online Courses and build valuable skills.</p>
          <button
            className="explore-btn"
            onClick={() => coursesRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Learning 🎓
          </button>
        </div>
      </div>

      <div className="filter-container" data-aos="fade-up" data-aos-delay="200">
        <select className="filter-dropdown1" onChange={(e) => setSelectedGrade(e.target.value)}>
          <option value="">Select Grade</option>
          {grades.map((grade, index) => (
            <option key={index} value={grade}>{grade}</option>
          ))}
        </select>

        <select className="filter-dropdown1" onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="">Select Course</option>
          {availableCourses.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>
      </div>

      <div className="courses-list" ref={coursesRef}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div
              key={index}
              className="course-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={course.image} alt={course.name} className="course-image" />
              <h3 className="course-title">{course.name}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-buttons">
                <button className="virtual" onClick={() => navigate(`/courses/${course.name}`)}>
                  Learn more..
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-courses" data-aos="fade-in">No courses available</p>
        )}
      </div>
    </div>
  );
};

export default Courses2;
