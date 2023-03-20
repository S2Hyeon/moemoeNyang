import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <h1>This is App2 Header</h1>
      <Outlet />
      <h2>This is App2 Footer</h2>
    </div>
  );
};

export default Layout;
