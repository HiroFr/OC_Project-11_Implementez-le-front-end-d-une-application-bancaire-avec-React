//COMPONENTS
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import AuthRoute from "../components/authentication/AuthRoute";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/*", element: <NotFound /> },
  { path: "/sign-in", element: <SignIn /> },
  {
    path: "/dashboard",
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    ),
  },
]);
