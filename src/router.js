import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  { path: "/", errorElement: ErrorPage },
  { path: "/login", element: <Login/> },
]);

export default router;
