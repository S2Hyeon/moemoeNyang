import React from "react";

export default function CatCard(props) {
  return (
    <div className="flex flex-col w-2/5 rounded-xl shadow-lg m-4">
      <div className="relative">
        <img
          className="rounded-t-xl"
          src="https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg"
          alt="고양이프로필사진"
        />
        <img
          className="absolute bottom-1 w-5 h-5 right-2"
          src="/images/button/FillStar.png"
          alt="즐겨찾기"
        />
      </div>
      <div>
        <div className="font-bold text-lg m-1 ml-4">이름 : 냥냥이</div>
        <div className="font-bold text-lg m-1 ml-4">성별 : 남</div>
        <div className="font-bold text-lg m-1 ml-4">나이 : 3</div>
        {/* <div className="font-bold text-lg m-1 ml-4">이름 : {props.data.name}</div>
        <div className="font-bold text-lg m-1 ml-4">성별 : {props.data.gender}</div>
        <div className="font-bold text-lg m-1 ml-4">나이 : {props.data.age}</div> */}
      </div>
    </div>
  );
}
