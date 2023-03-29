import React from "react";

<<<<<<< HEAD


export default function CatProfileBox() {

  return (
    <div className="flex items-center relative p-5">
      <img
        className="w-30 rounded-[64px]"
        src=""
        alt="고양이 이미지"
      />
      <div className="ml-16">
        <div className="font-bold text-sm">냥냥이</div>
        <div className="font-bold text-sm">2살</div>
        <div className="font-bold text-sm">남</div>
        <div className="font-bold text-sm">팔로워 : 3명</div>
        <div className="font-bold text-sm">질병 없음</div>
      </div>
      <div 
        className=""
			>

      </div>
      <div
        className=""
      >

      </div>
=======
export default function CatProfileBox({ catInfo }) {
  return (
    <div className="flex items-center relative p-5">
      <img
        className="w-1/3 rounded-[64px]"
        src={catInfo.image}
        alt="고양이 이미지"
      />
      <div className="ml-16">
        <div className="font-bold text-sm">{catInfo.name}</div>
        <div className="font-bold text-sm">{catInfo.age}살</div>
        <div className="font-bold text-sm">{catInfo.gender}</div>
        <div className="font-bold text-sm">
          팔로워 : {catInfo.follower_cnt}명
        </div>
        <div className="font-bold text-sm">질병 없음</div>
      </div>
      <div className=""></div>
      <div className=""></div>
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
    </div>
  );
}
