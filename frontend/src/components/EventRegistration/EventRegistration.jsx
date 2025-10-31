import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EventRegistration.css";

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    grade: "",
    parentName: "",
    parentContact: "",
    email: "",
    address: "",
    school: "",
    source: "",
    category: "",
    region: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const categories = ["Grade 3-5", "Grade 6-8", "Grade 9-12"];
  const zonesMap = {
    "Grade 3-5": ["Zone 1A", "Zone 1B"],
    "Grade 6-8": ["Zone 2"],
    "Grade 9-12": ["Zone 3"],
  };
  const sources = ["Friends", "School", "Social Media", "Others"];

  // Form validation
  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.gender) newErrors.gender = "Select a gender";
    if (!formData.grade.trim()) newErrors.grade = "Grade/Class is required";
    if (!formData.parentName.trim()) newErrors.parentName = "Parent/Guardian name is required";
    if (!/^\d{10}$/.test(formData.parentContact))
      newErrors.parentContact = "Enter a valid 10-digit mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.school.trim()) newErrors.school = "School Name is required";
    if (!formData.source) newErrors.source = "Please select an option";
    if (!formData.category) newErrors.category = "Playing category is required";
    if (!formData.region) newErrors.region = "Zone/Region is required";
    if (!formData.terms) newErrors.terms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // Payment handling
  const handlePayment = async () => {
    try {
      // 1️⃣ Create order on backend
      const { data } = await axios.post(
        "http://localhost:5000/api/registration/create-order",
        formData
      );

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "Cyberflix 2025",
        description: "Event Registration Fee ₹850",
        order_id: data.orderId,
        handler: async (response) => {
          try {
            // 2️⃣ Verify payment
            await axios.post("http://localhost:5000/api/registration/verify-payment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              registrationId: data.registrationId,
            });

            toast.success("🎉 Payment Successful & Registration Completed!");
            setFormData({
              fullName: "",
              gender: "",
              age: "",
              grade: "",
              parentName: "",
              parentContact: "",
              email: "",
              address: "",
              school: "",
              source: "",
              category: "",
              region: "",
              terms: false,
            });
          } catch (err) {
            console.error(err);
            toast.error("⚠️ Payment verification failed.");
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.parentContact,
        },
        theme: { color: "#0d6efd" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Failed to initiate payment.");
    }
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handlePayment();
    } else {
      toast.error("⚠️ Please fill all the details correctly.");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card shadow-lg p-4">
        <h2 className="text-center mb-4">🎉 Cyberflix 2025 Registration 🎉</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name & Gender */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                placeholder="Enter full name"
              />
              {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`form-select ${errors.gender ? "is-invalid" : ""}`}
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>
          </div>

          {/* Age & Grade */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={`form-control ${errors.age ? "is-invalid" : ""}`}
                min="5"
                max="20"
              />
              {errors.age && <div className="invalid-feedback">{errors.age}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Grade / Class</label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className={`form-control ${errors.grade ? "is-invalid" : ""}`}
                placeholder="E.g. 10th, 12th"
              />
              {errors.grade && <div className="invalid-feedback">{errors.grade}</div>}
            </div>
          </div>

          {/* Parent Name & Contact */}
          <div className="mb-3">
            <label className="form-label">Parent / Guardian Name</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              className={`form-control ${errors.parentName ? "is-invalid" : ""}`}
              placeholder="Enter parent/guardian name"
            />
            {errors.parentName && <div className="invalid-feedback">{errors.parentName}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Parent / Guardian Contact (WhatsApp)</label>
            <input
              type="tel"
              name="parentContact"
              value={formData.parentContact}
              onChange={handleChange}
              className={`form-control ${errors.parentContact ? "is-invalid" : ""}`}
              placeholder="10-digit mobile number"
            />
            {errors.parentContact && <div className="invalid-feedback">{errors.parentContact}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email address"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              rows="2"
              placeholder="Enter full address"
            ></textarea>
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>

          {/* School */}
          <div className="mb-3">
            <label className="form-label">School Name</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className={`form-control ${errors.school ? "is-invalid" : ""}`}
              placeholder="Enter school name"
            />
            {errors.school && <div className="invalid-feedback">{errors.school}</div>}
          </div>

          {/* Source */}
          <div className="mb-3">
            <label className="form-label">How did you know about this event?</label>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className={`form-select ${errors.source ? "is-invalid" : ""}`}
            >
              <option value="">Select</option>
              {sources.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            {errors.source && <div className="invalid-feedback">{errors.source}</div>}
          </div>

          {/* Category & Zone */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Playing Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`form-select ${errors.category ? "is-invalid" : ""}`}
              >
                <option value="">Select</option>
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <div className="invalid-feedback">{errors.category}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Zones</label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className={`form-select ${errors.region ? "is-invalid" : ""}`}
              >
                <option value="">Select</option>
                {formData.category &&
                  zonesMap[formData.category].map((zone) => <option key={zone}>{zone}</option>)}
              </select>
              {errors.region && <div className="invalid-feedback">{errors.region}</div>}
            </div>
          </div>

          {/* Terms */}
          <div className="form-check mb-3">
            <input
              className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              id="terms"
            />
            <label className="form-check-label" htmlFor="terms">
              ✅ I agree to the terms & conditions
            </label>
            {errors.terms && <div className="invalid-feedback d-block">{errors.terms}</div>}
          </div>

          <button type="submit" className="btn submit-btn w-100">
            💳 Pay & Submit ₹850
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EventRegistration;
