import React from "react";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Logout from "../components/Logout/Logout";

interface ROUTE_DETAILS {
  path: string;
  element: JSX.Element;
}

export const ROUTES: { [path: string]: ROUTE_DETAILS } = {
  HOME: {
    path: "/",
    element: <Home />,
  },
  LOGIN: {
    path: "/login",
    element: <Login />,
  },
  LOGOUT: {
    path: "/logout",
    element: <Logout />,
  },
};
