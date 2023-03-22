import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./footer/Navbar";
import Header from "./header/Header";

const Layout = () => {
  // 테일윈드 레이아웃 https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom
  return (
<<<<<<< HEAD
    <div className="flex flex-col h-screen justify-between overflow-hidden">
      <Header className="w-screen" />
      <div className="mb-auto w-screen overflow-scroll">
        <Outlet />
      </div>
      <Navbar className="w-screen" />
=======
    <div className="h-max">
      <Header className="absolute top-0" />
      <Outlet />
      <Navbar className="sticky bottom-0" />
>>>>>>> a188b11c075f52a7d79b9cdfcee36d22a2d8a5db
    </div>
  );
};

export default Layout;
