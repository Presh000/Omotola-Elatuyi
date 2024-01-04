// AppRouter.js
import React from "react";
import About from "../About"; // Import your About component
import Home from "../Home"; // Import your Home component
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/about", element: <About/> },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
