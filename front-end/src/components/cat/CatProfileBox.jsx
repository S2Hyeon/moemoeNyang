import React from "react";

export default function CatProfileBox({ catInfo }) {
  return (
    <div className="flex items-center relative p-5">
      <img
        className="w-30 rounded-[64px]"
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
    </div>
  );
}
