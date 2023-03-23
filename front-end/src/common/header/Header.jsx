import React from "react";
import { BsMap } from "@react-icons/all-files/bs/BsMap";
import { useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";

export default function Header() {
  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate("/map");
  };

  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");
  if (isAdmin) return <AdminHeader />;

  return (
    <div className="h-12 flex flex-shrink-0 justify-center items-center bg-lisa-300">
      <div className="text-xl font-bold text-slate-900">싸피대학교</div>
      <BsMap onClick={navigateToMap} className="absolute top-4 right-4" />
    </div>
  );
}
