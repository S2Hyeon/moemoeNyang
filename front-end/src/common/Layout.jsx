import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./footer/Navbar";
import Header from "./header/Header";

const Layout = () => {
  return (
    <div className="h-max">
      <Header className="absolute top-0" />
      <Outlet />
      <Navbar className="sticky bottom-0" />
    </div>
  );
};

export default Layout;
