import React, { useState, useContext } from 'react';
import axios from 'axios';
import './HazeAuth.css';
import { assets } from '../../assets/assets';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HazeAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = '/';
  const { login } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, mobile, email, password, confirmPassword } = formData;
    if (!email || !password) {
      toast.error("Email and Password are required.");
      return false;
    }

    if (!isLogin) {
      const nameRegex = /^[A-Za-z\s]{3,}$/;
      const mobileRegex = /^[0-9]{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nameRegex.test(fullName)) {
        toast.error("Full Name should be at least 3 characters long and contain only alphabets.");
        return false;
      }

      if (!mobileRegex.test(mobile)) {
        toast.error("Mobile number should be exactly 10 digits.");
        return false;
      }

      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address.");
        return false;
      }

      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        return false;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return false;
      }
    }
    return true;
  };


const handleLogin = async () => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    const user = response.data.user; // Ensure backend returns user data
    localStorage.setItem("user", JSON.stringify(user)); // Store in localStorage
    // navigate to home or dashboard
  } catch (err) {
    console.error("Login failed:", err);
  }
};




  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      if (isLogin) {
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email: formData.email,
          password: formData.password,
        });

        toast.success(res.data.message);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        login();
  // ✅ Redirect if admin email
        // if (res.data.user.email === 'cyberbots.mariyam@gmail.com') {
        //   navigate('/admin');
        // } else {
        //   navigate(from, { replace: true });
        // }

        if (res.data.user.isAdmin) {
  navigate('/admin');
} else {
  navigate('/');
}


        // navigate(from, { replace: true });
      } else {
        const res = await axios.post('http://localhost:5000/api/auth/register', {
          fullName: formData.fullName,
          mobile: formData.mobile,
          email: formData.email,
          password: formData.password,
        });

        toast.success(res.data.message);
        setIsLogin(true);
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="haze-container">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <div className="haze-left">
        <img src={assets.logo} alt="Auth Visual" className="haze-image" />
        <h2>{isLogin ? 'Welcome Back!' : 'Join Our Community'}</h2>
        <p>{isLogin ? 'Log in to access your dashboard.' : 'Create your account to get started.'}</p>
      </div>

      <div className="haze-right">
        <div className="auth-tabs">
          <button className={`tab-btn ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
          <button className={`tab-btn ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Sign Up</button>
        </div>

        <h2 className="form-title">{isLogin ? 'Login to Cyberbots' : 'Create an Account'}</h2>
        <form className="haze-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </>
          )}

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder={isLogin ? 'Enter your password' : 'Create a password'}
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              required
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {isLogin && (
            <div className="form-options">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember"> Remember me</label>
              </div>
<a href="/forgot-password" className="forgot-link">Forgot password?</a>

            </div>
          )}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (isLogin ? 'Logging in...' : 'Signing up...') : (isLogin ? 'Login' : 'Sign Up')}
          </button>

          <p className="signup-link">
            {isLogin ? (
              <>Don’t have an account? <span onClick={handleToggle}>Sign up</span></>
            ) : (
              <>Already have an account? <span onClick={handleToggle}>Login</span></>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default HazeAuth;
