import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TermsAndConditions = () => {
  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4 text-center">Terms and Conditions</h2>
        <div className="accordion" id="termsAccordion">
          {/* 1. Definitions and Acceptance of Terms */}
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
                1. Definitions and Acceptance of Terms
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <p>Welcome to Cyberbots These Terms and Conditions ("Terms") govern your access to and use of our website, services, online courses, component sales, and events (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services.</p>
                <p>You affirm that you are of legal age to enter into this agreement or have obtained parental/guardian consent if you are a minor, and you agree to comply with all applicable laws.</p>
                <p><strong>Definitions:</strong></p>
                <ul>
                  <li>"Cyberbots" "we," "us," or "our" refers to Cyberbots.</li>
                  <li>"You" or "User" refers to the individual or entity accessing or using our Services.</li>
                  <li>"Website" refers to [www.cyberbots.in].</li>
                  <li>"Online Courses" refers to the educational content, modules, lectures, and materials provided digitally through our platform.</li>
                  <li>"Components" refers to the physical or digital products, such as electronic components, kits, or software licenses, sold through our Website.</li>
                  <li>"Events" refers to workshops, webinars, competitions, or other activities organized and promoted by Cyberbots.</li>
                  <li>"Content" refers to all text, graphics, images, audio, video, software, data compilations, and any other form of information capable of being stored in a computer that appears on or forms part of this Website.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. User Responsibilities (Account Registration and Security) */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. User Responsibilities (Account & Security)
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <p>To access certain features (e.g., purchasing courses, components, registering for events), you may need to create an account.</p>
                <ul>
                  <li>Provide accurate, current, and complete information during registration and keep it updated.</li>
                  <li>Maintain the confidentiality of your account password and notify us immediately of any unauthorized use or security breach.</li>
                  <li>Cyberbots will not be liable for any loss or damage due to your failure to comply.</li>
                  <li>Use our website only for lawful purposes and not for any fraudulent activities.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Payment Terms (Pricing and Payment) */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. Payment Terms
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li>All payments made on our platform are secure and handled via trusted payment gateways.</li>
                  <li>Prices for components are listed in Indian Rupees (INR) and are subject to change without notice.</li>
                  <li>Payment must be made in full at the time of purchase.</li>
                  <li>Applicable taxes, shipping, and handling charges will be added to the total order value.</li>
                  <li>Registration/participation for events is confirmed only upon receipt of payment.</li>
                  <li>Generally, there are no cash refunds for digital/downloadable products, online courses (if a substantial portion is accessed), or attended events.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Shipping and Delivery */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                4. Shipping and Delivery (for Components)
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li>Dispatch within 3–7 working days from the order date.</li>
                  <li>Delivery timelines vary by location and courier availability; these are estimates only.</li>
                  <li>Shipping charges will be displayed at checkout.</li>
                  <li>Risk of loss and title for components pass to you upon our delivery to the carrier.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Cancellations and Refunds (for Online Courses and Components) */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                5. Cancellations and Refunds
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <p><strong>For Components:</strong></p>
                <ul>
                  <li>Orders can be cancelled within 24 hours if not dispatched.</li>
                  <li>Our return policy for components is [Specify your return policy, e.g., "3 days from the date of delivery"]. Components must be unused, in original packaging, and in the same condition received.</li>
                  <li>Certain items may be non-returnable (e.g., opened software, custom-ordered).</li>
                  <li>Refunds for components are processed after inspection. Shipping costs for returns are your responsibility unless due to our error.</li>
                </ul>
                <p><strong>For Online Courses:</strong></p>
                <ul>
                  <li>Refunds may be available within a limited period (e.g., 3 days) from purchase, provided you haven't accessed a substantial portion.</li>
                  <li>Refund requests must be submitted in writing to [Your Support Email Address]. We reserve the right to deny requests for abuse of policy.</li>
                  <li>Contact support for issues with digital content access.</li>
                </ul>
                <p><strong>For Events:</strong></p>
                <ul>
                  <li>Event registrations are generally non-refundable. If Cyberbots cancels the event It will be reschedules the event with a prior information.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Intellectual Property */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                6. Intellectual Property
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <p>All Content on the Website, including logos, course materials, images, audio, video, underlying code, and event formats, is the property of Cyberbots or its licensors. This material is protected by Indian and international intellectual property laws.</p>
                <p>You may not reproduce, copy, distribute, store, or re-use material from the Website without express written permission from Cyberbots, unless otherwise indicated on the Website.</p>
              </div>
            </div>
          </div>

          {/* 7. Code of Conduct for Courses and Events (User Conduct) */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                7. Code of Conduct for Courses and Events
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <p>You agree to use our Services only for lawful purposes and in a manner that respects the rights and enjoyment of others. Prohibited conduct includes:</p>
                <ul>
                  <li>Maintaining respectful behavior in all sessions and interactions.</li>
                  <li>Not sharing course materials or login details with unauthorized individuals.</li>
                  <li>Avoiding unauthorized or commercial use of our content.</li>
                  <li>Engaging in any harmful, fraudulent, deceptive, abusive, or defamatory activities.</li>
                  <li>Attempting unauthorized access to our systems or user accounts.</li>
                  <li>Interfering with or disrupting our Services.</li>
                  <li>Uploading or transmitting viruses or malicious code.</li>
                  <li>Impersonating anyone or misrepresenting your affiliation.</li>
                  <li>Collecting or storing personal data about other users without consent.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 8. Limitation of Liability */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                8. Limitation of Liability & Disclaimer of Warranties
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <p>Our Services are provided "as is" and "as available," without any warranties. Cyberbots does not guarantee that services will be uninterrupted, secure, or error-free.</p>
                <ul>
                  <li>No liability for personal injuries or accidents during use of products/events.</li>
                  <li>We are not responsible for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use or inability to use our Services.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 9. Privacy Policy */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                9. Privacy Policy
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                By using our services, you agree to our comprehensive <a href="/privacy-policy" target="_blank">Privacy Policy</a>, which details how we collect, use, disclose, and safeguard your information.
              </div>
            </div>
          </div>

          {/* 10. Changes to Terms */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                10. Changes to Terms & Governing Law
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <p>We may modify these Terms at any time at our sole discretion. If changes are material, we'll give 30 days' notice. Continued use of our site implies acceptance of the revised terms.</p>
                <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.</p>
                <p>If any part of these Terms is deemed invalid, the rest remain in effect. These Terms and our Privacy Policy represent the entire agreement between you and Cyberbots.</p>
              </div>
            </div>
          </div>

          {/* 11. Contact Us */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEleven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                11. Contact Us
              </button>
            </h2>
            <div
              id="collapseEleven"
              className="accordion-collapse collapse"
              aria-labelledby="headingEleven"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <p>If you have any questions about these Terms, please contact us:</p>
                <p>
                  <strong>Cyberbots</strong><br />
                  Email: <a href="mailto:info@cyberbots.in">info@cyberbots.in</a><br />
                  Phone: 7358039311<br />
                  Address: No.62, Ravi Colony 1st street, St.Thomas Mount, Chennai-600016
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;