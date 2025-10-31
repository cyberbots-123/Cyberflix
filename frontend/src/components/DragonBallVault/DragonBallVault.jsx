import React, { useState } from "react";
import axios from "axios";
import "./DragonBallVault.css";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const DragonBallVault = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    grade: "",
    school: "",
    contact: "",
  });

  const grades = ["Grade 3", "Grade 4", "Grade 5"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("⚠️ Razorpay SDK failed to load.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/vault/create-order", formData);

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "DragonBall Vault",
        description: "Robot Purchase ₹1299",
        order_id: data.orderId,
        handler: async (response) => {
          try {
            await axios.post("http://localhost:5000/api/vault/verify-payment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              purchaseId: data.purchaseId,
            });
            alert("✅ Payment Successful & Purchase Completed!");
            setFormData({ fullName: "", email: "", grade: "", school: "", contact: "" });
          } catch (err) {
            console.error(err);
            alert("⚠️ Payment verification failed!");
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.contact,
        },
        theme: { color: "#0d6efd" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("⚠️ Failed to initiate payment.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, grade, school, contact } = formData;
    if (!fullName || !email || !grade || !school || !contact) {
      alert("⚠️ Please fill all fields!");
      return;
    }
    handlePayment();
  };

  return (
    <div className="vault-container">
      <div className="vault-card">
        <h2 className="vault-title">⚡ DragonBall Vault Robot</h2>
        <form onSubmit={handleSubmit} className="vault-form">
           <div className="vault-input-group">
            <label>Full Name</label>
             <input
               type="text"
               name="fullName"
               placeholder="Enter your full name"
               value={formData.fullName}
               onChange={handleChange}
               required
             />
          </div>
           <div className="vault-input-group">
             <label>Email ID</label>
             <input
               type="email"
               name="email"
               placeholder="Enter your email"
               value={formData.email}
               onChange={handleChange}
               required
             />
           </div>

           <div className="vault-input-group">
            <label>Grade</label>
            <select
               name="grade"
               value={formData.grade}
               onChange={handleChange}
               required
             >
               <option value="">Select grade</option>
               {grades.map((g) => (
               <option key={g} value={g}>
                   {g}
                 </option>
               ))}
             </select>
           </div>

           <div className="vault-input-group">
             <label>School Name</label>
             <input
               type="text"
               name="school"
               placeholder="Enter your school name"
               value={formData.school}
               onChange={handleChange}
               required
             />
           </div>

           <div className="vault-input-group">
             <label>Contact Number</label>
             <input
               type="tel"
               name="contact"
               placeholder="10-digit mobile number"
               value={formData.contact}
              onChange={handleChange}
               pattern="[0-9]{10}"
               required
             />
           </div>

           <button type="submit" className="vault-btn">
             💳 Purchase Now — ₹1299
           </button>
         </form>
      </div>
    </div>
  );
};

export default DragonBallVault;
