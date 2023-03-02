import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const Login = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/Login")), 2000)
  )
);

const router = createBrowserRouter([
  { path: "/", errorElement: ErrorPage },
  {
    path: "/login",
    element: (
      <Suspense
        fallback={
          <div>
            <p>Loading...</p>
          </div>
        }
      >
        <Login />
      </Suspense>
    ),
  },
]);

export default router;
