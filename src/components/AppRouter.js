// AppRouter.js
import React from "react";
import About from "../About"; // Import your About component
import Home from "../Home"; // Import your Home component
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Connect from "../Connect";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/about", element: <About/> },
  { path: "/connect", element: <Connect/> },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
