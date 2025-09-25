import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/about", element: <About /> },
      { path: "/Gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
