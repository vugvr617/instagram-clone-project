import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { navigationItems } from "./helpers/NavigationItems";
import NavigationLayout from "./layouts/NavigationLayout";
import LoadingPage from "./pages/LoadingPage";

const Login = lazy(() => import("./pages/Login"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to="/home" replace />,
      },
      ...navigationItems.map((nav) => {
        if (nav.path) {
          console.log(nav.path);
          return { path: nav.path, element: nav.element };
        } else {
          return;
        }
      }),
    ],
  },
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
