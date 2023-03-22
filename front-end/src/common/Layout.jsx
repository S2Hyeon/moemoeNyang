import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./footer/Navbar";
import Header from "./header/Header";

const Layout = () => {
  // 테일윈드 레이아웃 https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom
  return (
    <div className="h-max">
      <Header className="absolute top-0" />
      <Outlet />
      <Navbar className="sticky bottom-0" />
    </div>
  );
};

export default Layout;
