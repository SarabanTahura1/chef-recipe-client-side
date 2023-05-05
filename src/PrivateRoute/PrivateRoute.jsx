import React, { useContext } from "react";
import { AuthInfoProvider } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthInfoProvider);
  const location = useLocation();
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
