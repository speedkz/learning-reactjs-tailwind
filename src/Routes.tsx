import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("pages/home"));
const AuthPage = lazy(() => import("pages/auth"));
const SignIn = lazy(() => import("pages/auth/signin"));
const SignUp = lazy(() => import("pages/auth/signup"));
const NotFound = lazy(() => import("pages/not-found"));
const Messenger = lazy(() => import("pages/messenger"));

export const ROUTES = [
  {
    path: "/",
    element: <Messenger />,
  },
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "messenger",
    element: <Messenger />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const AppRoutes = () => {
  const routes = useRoutes(ROUTES);
  return routes;
};

export default AppRoutes;
