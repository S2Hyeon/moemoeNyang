import React from "react";
import CatCard from "./CatCard";
import { HiPlusCircle } from "@react-icons/all-files/hi/HiPlusCircle";

export default function CatList() {
  return (
    <div className="flex flex-wrap pl-4 pr-4">
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <HiPlusCircle className="z-50 absolute text-lisa-500 w-12 h-12 right-6 bottom-16" />
    </div>
  );
}
