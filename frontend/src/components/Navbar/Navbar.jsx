import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { AuthContext } from '../../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Navbar = () => {
  const [navState, setNavState] = useState({ isOpen: false, isScrolled: false });
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);
  const isLoggedIn = !!user;

  useEffect(() => {
    const handleScroll = () => {
      setNavState((prev) => ({ ...prev, isScrolled: window.scrollY > 50 }));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${navState.isScrolled ? 'bg-light shadow-sm' : 'bg-white'} fixed-top`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="nav_logo" src={assets.logo} alt="Company Logo" loading="lazy" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={navState.isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={() => setNavState((prev) => ({ ...prev, isOpen: !prev.isOpen }))}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navState.isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Shop</Link></li>
            <li className="nav-item">
  <Link className="nav-link event-glow-btn" to="/events">
    Events
  </Link>
</li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Why Cyberbots
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/aboutus">About Us</Link></li>
                <li><Link className="dropdown-item" to="/career">Career</Link></li>
                <li><Link className="dropdown-item" to="/contactus">Contact Us</Link></li>
                <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
              </ul>
            </li>
          </ul>

          {isLoggedIn ? (
            <div className="d-flex align-items-center ms-3 gap-3">
              <Link to="/cart" className="btn btn-outline-secondary rounded-circle position-relative" style={{ fontSize: "1.2rem" }}>
                <FaShoppingCart />
              </Link>
              <span className="fw-semibold text-primary">
                Hi, {user?.fullName?.split(' ')[0] || 'User'}
              </span>
              <button
                className="btn btn-danger rounded-pill"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="btn btn-outline-primary rounded-pill ms-3"
              onClick={() => navigate('/auth')}
            >
              Login / Sign Up
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
