import PrivateRoute from './components/PrivateRoute';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Careers from './pages/Careers/Careers';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import ContactUs from './pages/ContactUs/ContactUs';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CourseForm from './components/CourseForm/CourseForm';
import Footer from './components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Blogs from './pages/Blogs/Blogs';
import ComingSoon from './components/ComingSoon/ComingSoon';
import CareerApplicationForm from './components/CareerApplicationForm/CareerApplicationForm';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import HazeAuth from './components/HazeAuth/HazeAuth';
import Dashboard from './components/Dashboard';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import OrderSuccess from './pages/OrderSuccess';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AdminRoute from './routes/AdminRoute';
import NotFound from './pages/NotFound';
import Event from './pages/Event/Event';
import CyberChan from './components/CyberChan/CyberChan';
import EventRegistration from './components/EventRegistration/EventRegistration';
import ZoneDetails from './components/ZoneDetails';
import DragonBallVault from './components/DragonBallVault/DragonBallVault';
import NauticaQuest from './components/NauticaQuest/NauticaQuest';



const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<AdminPanel />} /> */}

        <Route path="/admin" element={
  <AdminRoute>
    <AdminPanel />
  </AdminRoute>
} />
        <Route path="/career" element={<Careers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/courses/:courseName" element={<CourseDetails />} /> 
        <Route path="/enroll/:courseName" element={<CourseForm />} /> 
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/events" element={<Event />} />
        <Route path="/zone-details" element={<ZoneDetails />} />
        <Route path="/login" element={<ComingSoon />} />
        <Route path="/apply" element={<CareerApplicationForm />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/auth" element={<HazeAuth />} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/register" element={<EventRegistration />} />
        <Route path="/dbv" element={<DragonBallVault />} />
        <Route path="/nq" element={<NauticaQuest />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <CyberChan/>
      <Footer />
    </Router>
  );
};

export default App;
