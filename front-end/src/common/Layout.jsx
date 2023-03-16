import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./footer/Navbar";

const Layout = () => {
  return (
    <div>
      <h1>This is App2 Header</h1>
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Layout;
