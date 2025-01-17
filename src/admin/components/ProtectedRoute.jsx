import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const admin = useSelector((store) => store.admin); // Replace with your admin state

  if (!admin) {
    // Redirect to login if not authenticated
    return <Navigate to="/adminlogin" replace />;
  }

  // Render the protected component
  return children;
};

export default ProtectedRoute;
