import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Gallery from "../pages/Gallery";

import "../CSS/about.css";
import "../index.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
        <Footer/>
    </>
  );
};

export default MainLayout;
