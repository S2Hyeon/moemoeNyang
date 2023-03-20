import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./footer/Navbar";
import Header from "./header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Layout;
