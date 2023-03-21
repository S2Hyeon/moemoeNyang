import React from "react";
import BadgeList from "../../components/profile/BadgeList";
import ProfileBox from "../../components/profile/ProfileBox";

export default function Mypage() {
  return (
    <div>
      <ProfileBox />
      <div className="flex pl-4 pr-4 mb-4">
        <div className="grid place-items-center bg-lisa-200 w-1/2 h-8 rounded-l-2xl font-bold">
          배지
        </div>
        <div className="grid place-items-center bg-slate-200  w-1/2 h-8 rounded-r-2xl font-semibold">
          고양이 리스트
        </div>
      </div>
      <BadgeList />
    </div>
  );
}
