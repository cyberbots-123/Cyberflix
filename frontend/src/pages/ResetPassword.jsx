import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
        password: form.password
      });

      toast.success(res.data.message || "Password reset successful");
      setTimeout(() => navigate('/auth'), 2000); // Redirect to login
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <ToastContainer position="top-right" />
      <h2 className="mb-4">Reset Your Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>New Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter new password"
            required
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
