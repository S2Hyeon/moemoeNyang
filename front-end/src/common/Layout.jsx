import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { typedUseSelector } from "../store";
import Navbar from "./footer/Navbar";
import Header from "./header/Header";
import { AlertError } from "../utils/alertToastify";

const Layout = () => {
  const member = typedUseSelector((state) => state.member.memberObject);

  if (!member) {
    return <Navigate to="/login" {...AlertError("로그인이 필요하다냥")} />;
  }

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
