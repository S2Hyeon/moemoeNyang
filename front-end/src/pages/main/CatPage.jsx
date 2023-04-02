import React, { useState, useEffect } from "react";
import CatCard from "../../components/mypage/CatCard";
import { HiPlusCircle } from "@react-icons/all-files/hi/HiPlusCircle";
import { useNavigate } from "react-router-dom";
import { getCatList } from "../../services/cats";

import { typedUseSelector } from "./../../store";

export default function CatPage() {
  const navigate = useNavigate();

  const navigateToCatRegister = () => {
    navigate("/catregister");
  };

  const [catList, setCateList] = useState([]);
  const universityId = typedUseSelector(
    (state) => state.member.memberObject.universityId,
  );

  useEffect(() => {
    getCatList(universityId).then((res) => setCateList(res.data));
  }, []);

  useEffect(() => {
    if (!catList.length) return;
    console.log("cat list 불러오기");
    console.log(catList);
  }, [catList]);

  return (
    <div className="flex flex-wrap pl-4 pr-4">
      {catList.map((cat) => {
        return <CatCard catInfo={cat} />;
      })}
      <HiPlusCircle
        className="z-50 absolute text-lisa-500 w-12 h-12 right-8 bottom-14"
        onClick={navigateToCatRegister}
      />
    </div>
  );
}
