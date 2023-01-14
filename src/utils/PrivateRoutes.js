import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = { token: localStorage.getItem("tokens") };

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
