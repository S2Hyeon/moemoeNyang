import React from "react";
import { BsMap } from "@react-icons/all-files/bs/BsMap";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate("/map");
  };

  return (
    <div className="h-12 flex flex-shrink-0 justify-center items-center  bg-lisa-300">
      <div className="text-xl font-bold text-slate-900">관리자 페이지</div>
      <BsMap onClick={navigateToMap} className="absolute top-4 right-4" />
    </div>
  );
}
