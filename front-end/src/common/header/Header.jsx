import React from "react";
import { BsMap } from "@react-icons/all-files/bs/BsMap";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate("/map");
  };

  return (
    <div>
      <div className="h-10 flex justify-center items-center  bg-lisa-300">
        <div>싸피대학교</div>
        <BsMap onClick={navigateToMap} className="absolute top-3 right-4" />
      </div>
    </div>
  );
}
