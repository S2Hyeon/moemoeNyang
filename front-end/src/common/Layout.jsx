import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./footer/Navbar";
import Header from "./header/Header";

const Layout = () => {
  // 테일윈드 레이아웃 https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom
  return (
    <div className="flex flex-col h-screen top-0 sticky justify-between overflow-hidden">
      <Header className="w-screen" />
      <div className="mb-auto w-screen overflow-scroll">
        <Outlet />
      </div>
      <Navbar className="w-screen z-10" />
    </div>
  );
};

export default Layout;
