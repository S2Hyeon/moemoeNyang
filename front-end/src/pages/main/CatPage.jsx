import React from "react";
import CatCard from "../../components/mypage/CatCard";
import { HiPlusCircle } from "@react-icons/all-files/hi/HiPlusCircle";
import { useNavigate } from "react-router-dom";

export default function CatPage() {
  const navigate = useNavigate();

  const navigateToCatRegister = () => {
    navigate("/catregister")
  }

  return (
    <div className="flex flex-wrap pl-4 pr-4">
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <HiPlusCircle className="z-50 absolute text-lisa-500 w-12 h-12 right-8 bottom-14" onClick={navigateToCatRegister} />
    </div>
  );
}
