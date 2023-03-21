import React from "react";
import { BsFillStarFill } from "@react-icons/all-files/bs/BsFillStarFill";
import { BsStar } from "@react-icons/all-files/bs/BsStar";

export default function CatCard() {
  return (
    <div className="flex flex-col w-2/5 rounded-xl shadow-lg m-4">
      <img
        className="rounded-t-xl"
        src="https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg"
        alt="고양이프로필사진"
      />
      <div>
        <BsFillStarFill className="relative top-2 left-28 text-yellow-400" />
        <div className="font-bold text-lg m-1 ml-4">이름 : 냥냥</div>
        <div className="font-bold text-lg m-1 ml-4">성별 : 남</div>
        <div className="font-bold text-lg m-1 ml-4">나이 : 3</div>
      </div>
    </div>
  );
}
