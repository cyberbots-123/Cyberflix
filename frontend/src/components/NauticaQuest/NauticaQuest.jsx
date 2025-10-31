// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./NauticaQuest.css";

// const NauticaQuest = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     grade: "",
//     schoolName: "",
//     contactNumber: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { fullName, email, grade, schoolName, contactNumber } = formData;

//     if (!fullName || !email || !grade || !schoolName || !contactNumber) {
//       toast.error("⚠️ Please fill in all fields!");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/nautica/purchase", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success("✅ Purchase submitted successfully!");
//         setFormData({
//           fullName: "",
//           email: "",
//           grade: "",
//           schoolName: "",
//           contactNumber: "",
//         });
//       } else {
//         toast.error(`❌ ${data.message}`);
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("🚨 Server error. Please try again later.");
//     }
//   };

//   return (
//     <div className="nautica-container">
//       <div className="nautica-card">
//         <h2 className="nautica-title">🌊 Nautica Quest – Robot Purchase</h2>

//         <form className="nautica-form" onSubmit={handleSubmit}>
//           <div className="nautica-input-group">
//             <label>Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Enter your full name"
//               required
//             />
//           </div>

//           <div className="nautica-input-group">
//             <label>Email ID</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="nautica-input-group">
//             <label>Grade</label>
//             <select
//               name="grade"
//               value={formData.grade}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select your grade</option>
//               <option value="Grade 3">Grade 3</option>
//               <option value="Grade 4">Grade 4</option>
//               <option value="Grade 5">Grade 5</option>
//             </select>
//           </div>

//           <div className="nautica-input-group">
//             <label>School Name</label>
//             <input
//               type="text"
//               name="schoolName"
//               value={formData.schoolName}
//               onChange={handleChange}
//               placeholder="Enter your school name"
//               required
//             />
//           </div>

//           <div className="nautica-input-group">
//             <label>Contact Number</label>
//             <input
//               type="tel"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               placeholder="Enter your contact number"
//               pattern="[0-9]{10}"
//               required
//             />
//           </div>

//           <button type="submit" className="nautica-btn">
//             🤖 Buy Robot — ₹1699
//           </button>
//         </form>

//         <ToastContainer position="top-center" autoClose={2000} />
//       </div>
//     </div>
//   );
// };

// export default NauticaQuest;




import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./NauticaQuest.css";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const NauticaQuest = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    grade: "",
    schoolName: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      toast.error("⚠️ Razorpay SDK failed to load.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/nautica/create-order", formData);

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "Nautica Quest",
        description: "Robot Purchase ₹1699",
        order_id: data.orderId,
        handler: async (response) => {
          try {
            await axios.post("http://localhost:5000/api/nautica/verify-payment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              purchaseId: data.purchaseId,
            });
            toast.success("✅ Payment Successful & Purchase Completed!");
            setFormData({
              fullName: "",
              email: "",
              grade: "",
              schoolName: "",
              contactNumber: "",
            });
          } catch (err) {
            console.error(err);
            toast.error("⚠️ Payment verification failed.");
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.contactNumber,
        },
        theme: { color: "#0d6efd" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Failed to initiate payment.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, grade, schoolName, contactNumber } = formData;
    if (!fullName || !email || !grade || !schoolName || !contactNumber) {
      toast.error("⚠️ Please fill in all fields!");
      return;
    }
    handlePayment();
  };

  return (
    <div className="nautica-container">
      <div className="nautica-card">
        <h2 className="nautica-title">🌊 Nautica Quest – Robot Purchase</h2>
        <form className="nautica-form" onSubmit={handleSubmit}>
           <div className="nautica-input-group">
             <label>Full Name</label>
             <input
               type="text"
               name="fullName"
               value={formData.fullName}
               onChange={handleChange}
               placeholder="Enter your full name"
               required
             />
           </div>
          <div className="nautica-input-group">
             <label>Email ID</label>
             <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="Enter your email"
               required
             />
           </div>

           <div className="nautica-input-group">
             <label>Grade</label>
            <select
               name="grade"
               value={formData.grade}
               onChange={handleChange}
               required
             >
               <option value="">Select your grade</option>
               <option value="Grade 3">Grade 3</option>
               <option value="Grade 4">Grade 4</option>
               <option value="Grade 5">Grade 5</option>
             </select>
           </div>

           <div className="nautica-input-group">
             <label>School Name</label>
             <input
               type="text"
               name="schoolName"
               value={formData.schoolName}
               onChange={handleChange}
               placeholder="Enter your school name"
               required
             />
           </div>
           <div className="nautica-input-group">
             <label>Contact Number</label>
             <input
               type="tel"
               name="contactNumber"
               value={formData.contactNumber}
               onChange={handleChange}
               placeholder="Enter your contact number"
               pattern="[0-9]{10}"
               required
             />
           </div>

           <button type="submit" className="nautica-btn">
             🤖 Buy Robot — ₹1699
           </button>
         </form>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default NauticaQuest;
