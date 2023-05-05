import React, { useContext } from "react";
import { AuthInfoProvider } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthInfoProvider);
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
