import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../auth/Login";
import MyActions from "../views/actions";
import PageNotFound from "../views/errors/PageNotFound";
import Details from "../views/detail";
import { PrivateRoute, LoginRoute } from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        />
        <Route
          path="/actions"
          element={
            <PrivateRoute>
              <MyActions />
            </PrivateRoute>
          }
        />
        <Route
          path="/details"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRoute>
              <PageNotFound />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
