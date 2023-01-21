import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const isLoginRoutes = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user !== null && user.isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default isLoginRoutes;
