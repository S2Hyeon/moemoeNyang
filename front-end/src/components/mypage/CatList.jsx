import React, { useState, useEffect } from "react";
import CatCard from "./CatCard";
import { getFollowList } from "../../services/mypage";
import { HiPlusCircle } from "@react-icons/all-files/hi/HiPlusCircle";
import { useNavigate } from "react-router-dom";

export default function CatList() {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    getFollowList().then((res) => setCatList(res.data));
  }, []);

  useEffect(() => {
    if (!catList.length) return;
    console.log("follow cat list 불러오기");
    console.log(catList);
  }, [catList]);

  const navigate = useNavigate();

  const navigateToCatDetail = (cat_id) => {
    console.log("고양이 deail로 이동 id : ", cat_id);
    navigate(`/cat/${cat_id}`);
  };

  return (
    <div className="flex flex-wrap pl-4 pr-4">
      {catList.map((cat) => {
        return (
          <div key={cat.cat_id} onClick={() => navigateToCatDetail(cat.cat_id)}>
            <CatCard catInfo={cat} />
          </div>
        );
      })}
      <HiPlusCircle className="z-50 absolute text-lisa-500 w-12 h-12 right-6 bottom-16" />
    </div>
  );
}
