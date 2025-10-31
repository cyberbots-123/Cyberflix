import React, { useEffect } from 'react';
import './Careers1.css';
import { assets } from '../../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Careers1 = () => {
  useEffect(() => {
    document.body.style.overflowX = 'hidden'; 
    AOS.init({ duration: 1000 });
    return () => {
      document.body.style.overflowX = 'auto'; 
    };
  }, []);

  return (
    <div className="bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-6 text-center text-md-start mb-4 mb-md-0"
            data-aos="fade-right"
          >
            <h3 className="display-4 fw-bold">Your Career Deserves More Than a Title</h3>
            <br />
            <h4 className="display-7 fw-bold">Build a Legacy With CYBERBOTS</h4>
            <br />
            <div>
            </div>
          </div>
          <div
            className="col-md-6 text-center"
            data-aos="fade-left"
          >
            <img
              src={assets.careerbg}
              alt="Careers Background"
              className="img-fluid rounded"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers1;
