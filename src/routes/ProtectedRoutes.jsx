import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  // const token = localStorage.getItem("user");

  return user.user ? children : <Navigate to="/login" />;
};

export const LoginRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  // const token = localStorage.getItem("user");

  return user.user ? <Navigate to="/actions" /> : children;
};
