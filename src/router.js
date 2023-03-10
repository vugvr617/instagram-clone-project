import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { navigationItems } from "./helpers/NavigationItems";
import LoadingPage from "./pages/LoadingPage";
import AuthWrapper from "./layouts/AuthWrapper";

const Login = lazy(() => import("./pages/Login"));
const NavigationLayout = lazy(() => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(import("./layouts/NavigationLayout")), 4000)
  );
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthWrapper>
        <Suspense fallback={<LoadingPage />}>
          <NavigationLayout />
        </Suspense>
      </AuthWrapper>
    ),
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
