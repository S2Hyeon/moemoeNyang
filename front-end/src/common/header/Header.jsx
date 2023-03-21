import React from "react";
import { BsMap } from "@react-icons/all-files/bs/BsMap";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate("/map");
  };

  return (
    <div className="h-12 flex justify-center items-center  bg-lisa-300">
      <div className="text-xl font-bold text-slate-900">싸피대학교</div>
      <BsMap onClick={navigateToMap} className="absolute top-4 right-4" />
    </div>
  );
}
