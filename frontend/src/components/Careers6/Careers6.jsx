import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Careers6 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5" data-aos="fade-up">
      <div className="row align-items-center">
        <div className="col-md-6" data-aos="fade-right">
          <p className="text-uppercase text-muted fw-bold mb-2">- Benefits -</p>
          <h2 className="fw-bold mb-3">Become a Part of Our Team</h2>
          <p className="text-muted mb-4">
            Employee Benefits at Cyberbots.
          </p>
          <div className="accordion" id="benefitsAccordion" data-aos="zoom-in-up">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Government-Approved Leaves
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#benefitsAccordion"
              >
                <div className="accordion-body">
                  Enjoy all national and state-declared public holidays, plus personal and earned leave as per company policy.
                </div>
              </div>
            </div>

            <div className="accordion-item" data-aos="zoom-in-up" data-aos-delay="100">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Monthly Casual Leaves
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#benefitsAccordion"
              >
                <div className="accordion-body">
                  Regular time off to balance your personal and professional life.
                </div>
              </div>
            </div>

            <div className="accordion-item" data-aos="zoom-in-up" data-aos-delay="200">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Allowances & Perks
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#benefitsAccordion"
              >
                <div className="accordion-body">
                  Includes Travel Allowances for field visits, and other role-based financial benefits.
                </div>
              </div>
            </div>

            <div className="accordion-item" data-aos="zoom-in-up" data-aos-delay="300">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  School-Based Working Hours
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#benefitsAccordion"
              >
                <div className="accordion-body">
                  On Reporting days in schools, employees follow the school's working hours, offering better alignment and flexibility.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center" data-aos="fade-left">
          <img
            src={assets.careerbg6}
            alt="Career Background 6"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Careers6;
