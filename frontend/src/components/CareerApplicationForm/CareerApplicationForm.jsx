import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CareerApplicationForm = () => {
  const [jobTitles, setJobTitles] = useState([]);

  const initialFormData = {
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    contact: '',
    alternateContact: '',
    currentAddress: '',
    permanentAddress: '',
    degree: '',
    specialization: '',
    position: '',
    workLocation: '',
    availability: '',
    expectedSalary: '',
    relocate: '',
    travel: '',
    resume: null,
    photo: null,
    idProof: null,
    heardFrom: '',
    referralName: '',
    reasonToJoin: '',
    otherInfo: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const requiredFields = [
      'fullName', 'dob', 'gender', 'email', 'contact',
      'currentAddress', 'permanentAddress', 'degree', 'specialization',
      'position', 'availability', 'expectedSalary', 'relocate', 'travel'
    ];
    requiredFields.forEach(field => {
      if (!formData[field]) newErrors[field] = 'This field is required';
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formData.contact && !/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = 'Enter a valid 10-digit number';
    }

    if (formData.resume && !/\.(pdf|doc|docx)$/i.test(formData.resume.name)) {
      newErrors.resume = 'Only PDF or DOC files allowed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      await axios.post('http://localhost:5000/api/applications', data);
      toast.success('Application submitted successfully!');
      setFormData(initialFormData); // Reset the form
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit application.');
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobopenings")
      .then((res) => {
        const titles = res.data.map(job => job.title);
        setJobTitles(titles);
      })
      .catch((err) => {
        console.error("Error fetching job titles:", err);
      });
  }, []);

  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4">Application Form</h2>
        <form onSubmit={handleSubmit} noValidate>
          <h5>1. Personal Details</h5>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Full Name*</label>
              <input type="text" name="fullName" value={formData.fullName} className={`form-control ${errors.fullName && 'is-invalid'}`} onChange={handleChange} />
              {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
            </div>
            <div className="col-md-3">
              <label className="form-label">Date of Birth*</label>
              <input type="date" name="dob" value={formData.dob} className={`form-control ${errors.dob && 'is-invalid'}`} onChange={handleChange} />
              {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
            </div>
            <div className="col-md-3">
              <label className="form-label">Gender*</label>
              <select name="gender" value={formData.gender} className={`form-select ${errors.gender && 'is-invalid'}`} onChange={handleChange}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Degree*</label>
              <input type="text" name="degree" value={formData.degree} className={`form-control ${errors.degree && 'is-invalid'}`} onChange={handleChange} />
              {errors.degree && <div className="invalid-feedback">{errors.degree}</div>}
            </div>
            <div className="col-md-6">
              <label className="form-label">Specialization*</label>
              <input type="text" name="specialization" value={formData.specialization} className={`form-control ${errors.specialization && 'is-invalid'}`} onChange={handleChange} />
              {errors.specialization && <div className="invalid-feedback">{errors.specialization}</div>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Email Address*</label>
              <input type="email" name="email" value={formData.email} className={`form-control ${errors.email && 'is-invalid'}`} onChange={handleChange} />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="col-md-3">
              <label className="form-label">Contact Number*</label>
              <input type="text" name="contact" value={formData.contact} className={`form-control ${errors.contact && 'is-invalid'}`} onChange={handleChange} />
              {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
            </div>
            <div className="col-md-3">
              <label className="form-label">Alternate Contact Number</label>
              <input type="text" name="alternateContact" value={formData.alternateContact} className="form-control" onChange={handleChange} />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Current Address*</label>
            <textarea name="currentAddress" value={formData.currentAddress} className={`form-control ${errors.currentAddress && 'is-invalid'}`} onChange={handleChange}></textarea>
            {errors.currentAddress && <div className="invalid-feedback">{errors.currentAddress}</div>}
          </div>
          <div className="mb-4">
            <label className="form-label">Permanent Address*</label>
            <textarea name="permanentAddress" value={formData.permanentAddress} className={`form-control ${errors.permanentAddress && 'is-invalid'}`} onChange={handleChange}></textarea>
            {errors.permanentAddress && <div className="invalid-feedback">{errors.permanentAddress}</div>}
          </div>

          <h5>2. Position Details</h5>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Position Applying For*</label>
              <select name="position" value={formData.position} className={`form-select ${errors.position && 'is-invalid'}`} onChange={handleChange}>
                <option value="">Select</option>
                {jobTitles.map((title, idx) => (
                  <option key={idx} value={title}>{title}</option>
                ))}
              </select>
              {errors.position && <div className="invalid-feedback">{errors.position}</div>}
            </div>
            <div className="col-md-4">
              <label className="form-label">Preferred Work Location</label>
              <input type="text" name="workLocation" value={formData.workLocation} className="form-control" onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Availability to Join*</label>
              <select name="availability" value={formData.availability} className={`form-select ${errors.availability && 'is-invalid'}`} onChange={handleChange}>
                <option value="">Select</option>
                <option>Immediate</option>
                <option>Within 15 days</option>
                <option>30 days</option>
              </select>
              {errors.availability && <div className="invalid-feedback">{errors.availability}</div>}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">Expected Salary (CTC)*</label>
              <input type="text" name="expectedSalary" value={formData.expectedSalary} className={`form-control ${errors.expectedSalary && 'is-invalid'}`} onChange={handleChange} />
              {errors.expectedSalary && <div className="invalid-feedback">{errors.expectedSalary}</div>}
            </div>
            <div className="col-md-3">
              <label className="form-label">Willing to Relocate?*</label>
              <select name="relocate" value={formData.relocate} className={`form-select ${errors.relocate && 'is-invalid'}`} onChange={handleChange}>
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {errors.relocate && <div className="invalid-feedback">{errors.relocate}</div>}
            </div>
            <div className="col-md-3">
              <label className="form-label">Open to Travel Frequently?*</label>
              <select name="travel" value={formData.travel} className={`form-select ${errors.travel && 'is-invalid'}`} onChange={handleChange}>
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {errors.travel && <div className="invalid-feedback">{errors.travel}</div>}
            </div>
          </div>

          <h5>3. Upload Documents</h5>
          <div className="mb-3">
            <label className="form-label">Upload Resume (PDF/DOC)</label>
            <input type="file" name="resume" className={`form-control ${errors.resume && 'is-invalid'}`} onChange={handleChange} />
            {errors.resume && <div className="invalid-feedback">{errors.resume}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Upload Passport-size Photo</label>
            <input type="file" name="photo" className="form-control" onChange={handleChange} />
          </div>

          <h5>4. Additional Information</h5>
          <div className="mb-3">
            <label className="form-label">How did you hear about us?</label>
            <select name="heardFrom" value={formData.heardFrom} className="form-select" onChange={handleChange}>
              <option value="">Select</option>
              <option>Referral</option>
              <option>Job Portal</option>
              <option>Social Media</option>
              <option>Walk-in</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Referral Name (if any)</label>
            <input type="text" name="referralName" value={formData.referralName} className="form-control" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Why do you want to join our organization?</label>
            <textarea name="reasonToJoin" value={formData.reasonToJoin} className="form-control" rows="3" onChange={handleChange}></textarea>
          </div>
          <div className="mb-4">
            <label className="form-label">Any other information you'd like us to know?</label>
            <textarea name="otherInfo" value={formData.otherInfo} className="form-control" rows="3" onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit Application</button>
        </form>
      </div>

      <ToastContainer />
    </>
  );
};

export default CareerApplicationForm;
