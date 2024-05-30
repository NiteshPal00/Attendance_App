import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import SignUpComp from "./components/LoginPages/SignUpComp";
import SignInComp from "./components/LoginPages/SignInComp";
import { AppliactionComp } from "./components/pages/AppliactionComp";

export const CustomRoute = () => {
  const isAuthenticated = localStorage.getItem("token");
  const router = useRoutes([
    { path: "/", element: <SignInComp /> },
    { path: "/signUp", element: <SignUpComp /> },
    {
      path: "/applicationComp",
      element: isAuthenticated ? <AppliactionComp /> : <Navigate to="/" />,
    },
  ]);
  return router;
};
