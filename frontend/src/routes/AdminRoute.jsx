import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (user?.email === "cyberbots.mariyam@gmail.com") {
    return children; // ✅ Allow access
  }

  // ❌ Redirect if not admin
  return <Navigate to="/" replace />;
};

export default AdminRoute;
