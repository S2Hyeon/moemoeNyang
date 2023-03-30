import React, { useState, useEffect } from "react";
import CatCard from "./CatCard";
import { getCatList } from "../../services/cats";
import { HiPlusCircle } from "@react-icons/all-files/hi/HiPlusCircle";

export default function CatList() {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    getCatList().then((res) => setCatList(res.data));
  }, []);

  useEffect(() => {
    if (!catList.length) return;
    console.log("cat list 불러오기");
    console.log(catList);
  }, [catList]);

  return (
    <div className="flex flex-wrap pl-4 pr-4">
      {catList.map((cat) => {
        return <CatCard catInfo={cat} key={cat.cat_id} />;
      })}
      <HiPlusCircle className="z-50 absolute text-lisa-500 w-12 h-12 right-6 bottom-16" />
    </div>
  );
}
