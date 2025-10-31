import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  studentName: "",
  dob: "",
  gender: "",
  grade: "",
  institutionName: "",
  learningMode: [],
  parentName: "",
  relationship: "",
  mobileNumber: "",
  alternateMobile: "",
  emailAddress: "",
  communicationAddress: "",
  courseSelection: "",
  declaration: false,
  consentParticipation: false,
  termsAgreement: false,
  photoConsent: false,
};

const CourseForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (id === "onlineMode" || id === "offlineMode") {
      const mode = value;
      let updatedModes = [...formData.learningMode];

      if (checked) {
        updatedModes.push(mode);
      } else {
        updatedModes = updatedModes.filter((item) => item !== mode);
      }

      setFormData({ ...formData, learningMode: updatedModes });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [id]: checked });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const validate = () => {
    let tempErrors = {};
    let hasError = false;

    const showError = (key, message) => {
      tempErrors[key] = message;
      toast.error(message);
      hasError = true;
    };

    if (!formData.studentName.trim()) showError("studentName", "Student name is required.");
    if (!formData.dob) showError("dob", "Date of birth is required.");
    if (!formData.gender) showError("gender", "Gender is required.");
    if (!formData.grade.trim()) showError("grade", "Grade/Class is required.");
    if (!formData.institutionName.trim()) showError("institutionName", "Institution name is required.");
    if (!formData.parentName.trim()) showError("parentName", "Parent/Guardian name is required.");
    if (!formData.relationship.trim()) showError("relationship", "Relationship is required.");
    if (!formData.mobileNumber.match(/^\d{10}$/)) showError("mobileNumber", "Enter a valid 10-digit mobile number.");
    if (formData.alternateMobile && !formData.alternateMobile.match(/^\d{10}$/)) showError("alternateMobile", "Enter a valid 10-digit alternate number.");
    if (!formData.emailAddress.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) showError("emailAddress", "Enter a valid email address.");
    if (!formData.communicationAddress.trim()) showError("communicationAddress", "Address is required.");
    if (!formData.courseSelection) showError("courseSelection", "Please select a course.");
    if (!formData.declaration) showError("declaration", "You must declare the information is correct.");
    if (!formData.consentParticipation) showError("consentParticipation", "You must consent to participation.");
    if (!formData.termsAgreement) showError("termsAgreement", "You must agree to the terms and conditions.");

    setErrors(tempErrors);
    return !hasError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post("http://localhost:5000/api/courses/register", formData);
        toast.success(response.data.message || "Form submitted successfully!");
        setFormData(initialState);
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error submitting form", error);
        toast.error("Error submitting form. Please try again.");
        setMessage("Error submitting form. Please try again.");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-4">Student Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="studentName" className="form-label">Student Name</label>
            <input type="text" className="form-control" id="studentName" value={formData.studentName} onChange={handleChange} />
            {errors.studentName && <div className="text-danger">{errors.studentName}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dob" value={formData.dob} onChange={handleChange} />
            {errors.dob && <div className="text-danger">{errors.dob}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select className="form-control" id="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <div className="text-danger">{errors.gender}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="grade" className="form-label">Grade/Class</label>
            <input type="text" className="form-control" id="grade" value={formData.grade} onChange={handleChange} />
            {errors.grade && <div className="text-danger">{errors.grade}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="institutionName" className="form-label">Institution Name</label>
            <input type="text" className="form-control" id="institutionName" value={formData.institutionName} onChange={handleChange} />
            {errors.institutionName && <div className="text-danger">{errors.institutionName}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Preferred Learning Mode</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="onlineMode" value="Online" checked={formData.learningMode.includes("Online")} onChange={handleChange} />
              <label className="form-check-label" htmlFor="onlineMode">Online</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="offlineMode" value="Offline" checked={formData.learningMode.includes("Offline")} onChange={handleChange} />
              <label className="form-check-label" htmlFor="offlineMode">Offline</label>
            </div>
          </div>

          <hr />
          <h2 className="mb-4">Parent/Guardian Details</h2>

          <div className="mb-3">
            <label htmlFor="parentName" className="form-label">Parent/Guardian Name</label>
            <input type="text" className="form-control" id="parentName" value={formData.parentName} onChange={handleChange} />
            {errors.parentName && <div className="text-danger">{errors.parentName}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="relationship" className="form-label">Relationship</label>
            <input type="text" className="form-control" id="relationship" value={formData.relationship} onChange={handleChange} />
            {errors.relationship && <div className="text-danger">{errors.relationship}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
            <input type="tel" className="form-control" id="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
            {errors.mobileNumber && <div className="text-danger">{errors.mobileNumber}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="alternateMobile" className="form-label">Alternate Mobile Number</label>
            <input type="tel" className="form-control" id="alternateMobile" value={formData.alternateMobile} onChange={handleChange} />
            {errors.alternateMobile && <div className="text-danger">{errors.alternateMobile}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="emailAddress" value={formData.emailAddress} onChange={handleChange} />
            {errors.emailAddress && <div className="text-danger">{errors.emailAddress}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="communicationAddress" className="form-label">Address for Communication</label>
            <textarea className="form-control" id="communicationAddress" rows="3" value={formData.communicationAddress} onChange={handleChange}></textarea>
            {errors.communicationAddress && <div className="text-danger">{errors.communicationAddress}</div>}
          </div>

          <hr />
          <h2 className="mb-4">Course Selection</h2>
          <label className="form-label">Select the skill development program your ward wants to enroll in</label>

          <div className="mb-3">
            <select className="form-control" id="courseSelection" value={formData.courseSelection} onChange={handleChange}>
              <option value="">Select a Course</option>
              <option value="Robotics">Robotics</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="3D Printing">3D Printing</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Financial Literacy">Financial Literacy</option>
              <option value="STEM Education">STEM Education</option>
              <option value="Programming Languages">Programming Languages</option>
              <option value="IoT">IoT</option>
              <option value="Drone Technology">Drone Technology</option>
            </select>
            {errors.courseSelection && <div className="text-danger">{errors.courseSelection}</div>}
          </div>

          <div className="mb-3 form-check">
            <input className="form-check-input" type="checkbox" id="declaration" checked={formData.declaration} onChange={handleChange} />
            <label className="form-check-label" htmlFor="declaration">
              I, (Parent/Guardian Name), hereby declare that the information provided is accurate and correct.
            </label>
            {errors.declaration && <div className="text-danger">{errors.declaration}</div>}
          </div>

          <div className="mb-3 form-check">
            <input className="form-check-input" type="checkbox" id="consentParticipation" checked={formData.consentParticipation} onChange={handleChange} />
            <label className="form-check-label" htmlFor="consentParticipation">
              I consent to my ward's participation in the Cyberbots Skill Development Program.
            </label>
            {errors.consentParticipation && <div className="text-danger">{errors.consentParticipation}</div>}
          </div>

          <div className="mb-3 form-check">
            <input className="form-check-input" type="checkbox" id="termsAgreement" checked={formData.termsAgreement} onChange={handleChange} />
            <label className="form-check-label" htmlFor="termsAgreement">
              I agree to abide by the terms and conditions set by Cyberbots.
            </label>
            {errors.termsAgreement && <div className="text-danger">{errors.termsAgreement}</div>}
          </div>

          <div className="mb-3 form-check">
            <input className="form-check-input" type="checkbox" id="photoConsent" checked={formData.photoConsent} onChange={handleChange} />
            <label className="form-check-label" htmlFor="photoConsent">
              I allow Cyberbots to use my ward's learning progress and photographs for educational and promotional purposes.
            </label>
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {message && <p className="mt-3 text-info">{message}</p>}
        </form>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <br />
      </div>
    </>
  );
};

export default CourseForm;
