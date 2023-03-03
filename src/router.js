import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoadingPage from "./pages/LoadingPage";

const Login = lazy(() => import("./pages/Login"));

const router = createBrowserRouter([
  { path: "/", errorElement: ErrorPage },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Login />
      </Suspense>
    ),
  },
]);

export default router;
