import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = JSON.parse(localStorage.getItem("admin"));

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
