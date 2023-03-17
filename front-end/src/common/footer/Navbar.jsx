import React from "react";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { RiBookletLine } from "@react-icons/all-files/ri/RiBookletLine";
import { RiHospitalLine } from "@react-icons/all-files/ri/RiHospitalLine";
import { BsPencil } from "@react-icons/all-files/bs/BsPencil";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";

export default function Navbar() {
  return (
    <div className="flex">
      <AiOutlineHome />
      <RiBookletLine />
      <BsPencil />
      <RiHospitalLine />
      <BsPerson />
    </div>
  );
}
