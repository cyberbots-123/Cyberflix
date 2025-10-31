// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    alternateMobile: '',
    address: '',
    landmark: '',
    termsAccepted: false,
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.termsAccepted) {
      toast.warn('Please accept the terms and conditions.');
      return;
    }

    setLoading(true);

    try {
      const res = await API.post('/order', form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      toast.success('🎉 Order placed successfully!');

      setForm({
        fullName: '',
        email: '',
        mobile: '',
        alternateMobile: '',
        address: '',
        landmark: '',
        termsAccepted: false,
      });

      setTimeout(() => {
        navigate('/cart');
      }, 2000);
    } catch (error) {
      console.error('Checkout failed:', error);
      toast.error(error?.response?.data?.message || 'There was an error processing your order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="row g-3 shadow p-4 rounded bg-light">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email ID</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit number"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Alternate Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            name="alternateMobile"
            value={form.alternateMobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit number"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Full Address</label>
          <textarea
            className="form-control"
            name="address"
            rows="3"
            value={form.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="col-12">
          <label className="form-label">Nearby Landmark</label>
          <input
            type="text"
            className="form-control"
            name="landmark"
            value={form.landmark}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="termsAccepted"
            checked={form.termsAccepted}
            onChange={handleChange}
          />
          <label className="form-check-label">
            I agree to the Terms and Conditions
          </label>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success w-100 mt-3" disabled={loading}>
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
        </div>
      </form>

      {/* ToastContainer added directly here */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Checkout;
